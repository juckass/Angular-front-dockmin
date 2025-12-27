import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { LoginRequest, LoginResponse, Usuario } from '../model/auth.models';
import { decodeToken, getCurrentUser } from '../../../core/utils/jwt.utils';  // Agrega

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = `${environment.apiUrl}/auth`;

  constructor(private http: HttpClient) {}

  // Método para login
  login(credentials: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, credentials);
  }

  // Método para logout (opcional)
  logout(): Observable<any> {
    return this.http.post(`${this.apiUrl}/logout`, {});
  }

  // Método para refrescar token
  refreshToken(): Observable<LoginResponse> {
    const refreshToken = localStorage.getItem('refreshToken') || sessionStorage.getItem('refreshToken');
    return this.http.post<LoginResponse>(`${this.apiUrl}/refresh`, { refreshToken });
  }

  // Método para obtener info del usuario
  getUserInfo(): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.apiUrl}/me`);
  }

  // Método para obtener usuario del token actual
  getCurrentUser(): Usuario | null {
    return getCurrentUser();  // O usa directamente la importada
  }
}