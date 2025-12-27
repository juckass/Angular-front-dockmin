import { jwtDecode } from 'jwt-decode';
import { Usuario } from '../../modules/auth/model/auth.models';  // Ajusta la ruta

// Función para decodificar JWT
export function decodeToken(token: string): Usuario | null {
  try {
    const decoded: any = jwtDecode(token);
    return {
      id: decoded.sub,
      email: decoded.email,
      nombreCompleto: decoded.email || '',  // Ajusta si tienes nombre
      roleId: decoded.rolId,
      role: decoded.rol,
      permisos: decoded.permisos
    };
  } catch (error) {
    console.error('Error decodificando token:', error);
    return null;
  }
}

// Función para obtener usuario del token guardado
export function getCurrentUser(): Usuario | null {
  const token = localStorage.getItem('accessToken') || sessionStorage.getItem('accessToken');
  return token ? decodeToken(token) : null;
}