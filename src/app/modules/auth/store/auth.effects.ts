import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { loginStart, loginSuccess, loginFailure, logout } from './auth.actions';
import { Usuario, LoginResponse } from '../model/auth.models';
import { decodeToken } from '../../../core/utils/jwt.utils';  // Agregar esta importación

@Injectable()
export class AuthEffects {
  private actions$ = inject(Actions);
  private authService = inject(AuthService);

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginStart),
      mergeMap(({ email, password, remember }) =>
        this.authService.login({ email, password, remember }).pipe(
          map((response: LoginResponse) => {
            const user = decodeToken(response.access_token);
            if (!user) {
              throw new Error('Invalid token');
            }

            // Guardar tokens según "remember"
            if (remember) {
              localStorage.setItem('accessToken', response.access_token);
              localStorage.setItem('refreshToken', response.refresh_token);
            } else {
              sessionStorage.setItem('accessToken', response.access_token);
              sessionStorage.setItem('refreshToken', response.refresh_token);
            }

            return loginSuccess({
              user,
              tokens: { accessToken: response.access_token, refreshToken: response.refresh_token }
            });
          }),
          catchError((error) => of(loginFailure({ error: error.message || 'Error en login' })))
        )
      )
    )
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(logout),
      map(() => {
        this.authService.logout();
        return { type: '[Auth] Logout Completed' };
      })
    )
  );
}