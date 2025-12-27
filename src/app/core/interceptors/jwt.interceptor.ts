import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { HttpRequest, HttpHandlerFn, HttpErrorResponse } from '@angular/common/http';
import { catchError, switchMap, throwError } from 'rxjs';
import { AuthService } from '../../modules/auth/services/auth.service';  // Ajusta la ruta

export const jwtInterceptor: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn) => {
  const authService = inject(AuthService);

  const token = localStorage.getItem('accessToken');
  if (token && authService.isTokenExpired(token)) {  // Asume que tienes isTokenExpired en AuthService
    // Si expiró, refresca antes de enviar
    return authService.refreshToken().pipe(
      switchMap(() => {
        const newToken = localStorage.getItem('accessToken');
        const newReq = req.clone({
          setHeaders: { Authorization: `Bearer ${newToken}` }
        });
        return next(newReq);
      }),
      catchError(() => throwError(() => new Error('Refresh failed')))
    );
  }

  // Agrega header si no expiró
  if (token) {
    req = req.clone({
      setHeaders: { Authorization: `Bearer ${token}` }
    });
  }

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401) {
        // Intenta refrescar en 401
        return authService.refreshToken().pipe(
          switchMap(() => {
            const newToken = localStorage.getItem('accessToken');
            const newReq = req.clone({
              setHeaders: { Authorization: `Bearer ${newToken}` }
            });
            return next(newReq);
          }),
          catchError(() => throwError(() => error))
        );
      }
      return throwError(() => error);
    })
  );
};