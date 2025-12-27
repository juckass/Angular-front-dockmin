import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { LoginRequest, LoginResponse, Usuario, RefreshResponse } from '../model/auth.models';
import { decodeToken, getCurrentUser } from '../../../core/utils/jwt.utils';  // Agrega
import { Store } from '@ngrx/store';
import { logout, loginSuccess, refreshTokenSuccess } from '../store/auth.actions';
import { catchError, map } from 'rxjs/operators';
import { selectUser } from '../store/auth.selectors';  // Corrige a selectUser
import {jwtDecode} from 'jwt-decode'; // Asegúrate de tener esta importación

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = `${environment.apiUrl}/auth`;

  constructor(private http: HttpClient, private store: Store) {}

  // Método para login
  login(credentials: LoginRequest): Observable<LoginResponse> {
    const {remember, ...credentials2} = credentials;
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, credentials2);
  }

  // Método para logout (opcional)
  logout(): Observable<any> {
    return this.http.post(`${this.apiUrl}/logout`, {});
  }

  // Método para refrescar el token
  refreshToken(): Observable<RefreshResponse> {
    const refreshToken = localStorage.getItem('refreshToken');

    if (!refreshToken) {
      this.store.dispatch(logout());
      return throwError(() => new Error('No refresh token available'));
    }
    
    return this.http.post<RefreshResponse>(`${this.apiUrl}/refresh`, { refreshToken }).pipe(
      map(response => {
        // Actualiza localStorage
        localStorage.setItem('accessToken', response.access_token);
        
        // Dispatch: solo tokens
        this.store.dispatch(refreshTokenSuccess({
          accessToken: response.access_token,
          refreshToken: localStorage.getItem('refreshToken') || undefined  // Convierte null a undefined
        }));
        
        return response;
      }),
      catchError((error: HttpErrorResponse) => {
        this.store.dispatch(logout());
        return throwError(() => error);
      })
    );
  }

  // Método para obtener info del usuario
  getUserInfo(): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.apiUrl}/me`);
  }

  // Método para obtener usuario del token actual
  getCurrentUser(): Usuario | null {
    return getCurrentUser();  // O usa directamente la importada
  }

  // Método para verificar si el token ha expirado
  isTokenExpired(token: string): boolean {
    try {
      const decoded: any = jwtDecode(token);
      const currentTime = Math.floor(Date.now() / 1000);
      return decoded.exp < currentTime;
    } catch {
      return true;  // Asume expirado si no se puede decodificar
    }
  }
}