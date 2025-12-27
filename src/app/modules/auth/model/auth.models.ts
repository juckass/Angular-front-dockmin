// src/app/modules/auth/model/auth.models.ts

// 1. Datos que enviamos al backend para hacer login
export interface LoginRequest {
  email: string;      // El email del usuario (string obligatorio)
  password: string;
  remember: boolean;   // La contraseña (string obligatorio)
}

// 2. Respuesta que esperamos del backend después del login
export interface LoginResponse {
  access_token: string;  // Cambia a snake_case
  refresh_token: string; // Cambia a snake_case
}

// 3. Datos del usuario logueado (puedes obtenerlos del JWT o de otra petición)
// Actualiza la interface Usuario si quieres incluir permisos
export interface Usuario {
  id: number;
  email: string;
  nombreCompleto: string;  // Si no hay nombre, usa email o deja vacío
  roleId: number;
  role?: string;  // Agrega si quieres el nombre del rol
  permisos?: string[];  // Agrega permisos
}