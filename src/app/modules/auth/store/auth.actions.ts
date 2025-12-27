import { createAction, props } from '@ngrx/store';
import { Usuario } from '../model/auth.models';

// Action: Iniciar login
export const loginStart = createAction(
  '[Auth] Login Start',
  props<{ email: string; password: string, remember: boolean }>()
);

// Action: Login exitoso
export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{ 
    user: Usuario; 
    tokens: { 
      accessToken: string; 
      refreshToken: string; 
    }; 
  }>()
);

// Action: Login fallido
export const loginFailure = createAction(
  '[Auth] Login Failure',
  props<{ error: string }>()
);

// Action: Logout
export const logout = createAction('[Auth] Logout');

// Acción para refresh exitoso (solo actualiza tokens)
export const refreshTokenSuccess = createAction(
  '[Auth] Refresh Token Success',
  props<{ 
    accessToken: string; 
    refreshToken?: string;  // Opcional si el backend no lo rota
  }>()
);