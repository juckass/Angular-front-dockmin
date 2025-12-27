import { createReducer, on } from '@ngrx/store';
import { Usuario } from '../model/auth.models';
import * as AuthActions from '../store/auth.actions';  // Próximo paso
import { refreshTokenSuccess } from './auth.actions';  // Agrega

// Estado inicial de auth
export interface AuthState {
  user: Usuario | null;
  isAuthenticated: boolean;
  tokens: { accessToken: string; refreshToken: string } | null;
  loading: boolean;
  error: string | null;
}

export const initialAuthState: AuthState = {
  user: null,
  isAuthenticated: false,
  tokens: null,
  loading: false,
  error: null
};

// Reducer: actualiza estado basado en actions
export const authReducer = createReducer(
  initialAuthState,

  // Acción: login start
  on(AuthActions.loginStart, (state) => ({
    ...state,
    loading: true,
    error: null
  })),

  // Acción: login success
  on(AuthActions.loginSuccess, (state, { user, tokens }) => ({
    ...state,
    user,
    tokens,
    isAuthenticated: true,
    loading: false,
    error: null
  })),

  // Acción: login failure
  on(AuthActions.loginFailure, (state, { error }) => ({
    ...state,
    user: null,
    tokens: null,
    isAuthenticated: false,
    loading: false,
    error
  })),

  // Acción: logout
  on(AuthActions.logout, (state) => ({
    ...initialAuthState  // Resetea todo
  })),

  on(refreshTokenSuccess, (state, { accessToken, refreshToken }) => ({
    ...state,
    tokens: {
      ...state.tokens,  // Si tokens es null, esto no rompe
      accessToken,
      refreshToken: refreshToken || state.tokens?.refreshToken || ''  // Usa ?. para null-safe
    },
    loading: false,
    error: null
  }))
);