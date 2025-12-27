# Mi Proyecto Angular

Este es un proyecto de ejemplo para demostrar la estructura de un proyecto Angular.

## Estructura y stack actual

El proyecto sigue una arquitectura modular y escalable:

- `core/` (servicios globales, guards, interceptores)
- `shared/` (componentes reutilizables, botones, modales, pipes, directivas)
- `modules/` (dashboard, clientes, ambientes, usuarios, roles, docker, etc.)
- `layout/` (sidebar, navbar, footer, header)

### Stack y librerías
- Angular 20 (standalone components, routing, reactive forms)
- Angular Material (UI, modales, tablas, iconos)
- TailwindCSS (estilos utilitarios y responsivos)
- NgRx (gestión de estado global, seguridad, roles y permisos)

### Componentes destacados
- Tabla reutilizable con Angular Material Table, buscador, paginación y acciones (editar/eliminar)
- Botón de acción reutilizable (`app-action-button`), configurable por label, icono y color
- Modal genérico (`app-generic-modal`), permite proyectar cualquier componente (ejemplo: formulario de cliente)
- Formulario reactivo standalone para CRUD de clientes

### Flujo CRUD moderno
1. El usuario abre un modal genérico y se proyecta el formulario standalone.
2. El formulario emite el resultado al cerrar el modal y el padre procesa la acción (guardar, editar, etc.).
3. Todo el flujo es desacoplado y reutilizable.

Esta estructura y stack permiten aprender Angular moderno, aplicar buenas prácticas y escalar el proyecto fácilmente.

## Instalación

Para instalar las dependencias del proyecto, ejecuta:

```
npm install
```

## Ejecución en Desarrollo
Para ejecutar el proyecto en modo de desarrollo (usa `environment.ts` con configuraciones locales):
```
ng serve
```
Abre `http://localhost:4200/`.

## Construcción para Producción
Para construir el proyecto para producción (usa `environment.prod.ts` con configuraciones de producción):
```
ng build --configuration production
```
Los archivos generados estarán en `dist/`.

## Despliegue
- Sube los archivos de `dist/` a tu servidor web.
- Asegúrate de que `environment.prod.ts` tenga las URLs y configuraciones correctas para producción.

## Progreso Actual (Fase 3: Login, Seguridad y Estado Transversal)

### ✅ Completado Hoy:
- **Modelos de Autenticación**: Interfaces `LoginRequest`, `LoginResponse`, `Usuario` en `auth.models.ts`.
- **Servicio de Auth**: `AuthService` con métodos para login, logout, refresh, y decodificación JWT usando `jwt-decode`.
- **Componente Login**: Formulario reactivo con validaciones, integración con NgRx, manejo de "Recuérdame" (localStorage vs sessionStorage).
- **NgRx Configurado**:
  - Actions: `loginStart`, `loginSuccess`, `loginFailure`, `logout`.
  - Reducer: Manejo del estado de auth (user, isAuthenticated, tokens, loading, error).
  - Selectors: Para leer estado desde componentes.
  - Effects: Lógica asíncrona para login (llamada HTTP, decodificación, actualización de estado).
- **Integración Global**: `provideHttpClient`, `provideStore`, `provideEffects` en `app.config.ts`.
- **Utilidades JWT**: Función `decodeToken` en `jwt.utils.ts` para extraer info del usuario del token.
- **Problemas Resueltos**:
  - CORS: Configurado en backend NestJS.
  - Zone.js: Instalado y importado en `main.ts`.
  - Nombres de Campos: Ajustado `access_token` vs `accessToken` en interfaces y código.
  - Errores de Compilación: Tipos corregidos en effects y templates.

### 🔄 En Progreso:
- **Pruebas de Login**: Funciona con backend, guarda tokens, actualiza estado NgRx. Faltan pruebas de "Recuérdame" y errores.

### ❌ Pendiente:
- **Guards**: Crear `AuthGuard` para proteger rutas según autenticación.
- **Interceptor JWT**: Agregar header `Authorization: Bearer <token>` a todas las requests HTTP.
- **Logout Completo**: Limpiar estado NgRx, redirigir a login.
- **Permisos**: Mostrar/ocultar elementos UI según roles/permisos del usuario.
- **Refresh Token**: Lógica automática para renovar tokens expirados.
- **Pruebas**: Validar flujo completo (login → dashboard → logout).

### Próximos Pasos:
1. Implementar `AuthGuard` para rutas protegidas.
2. Crear interceptor para JWT en headers.
3. Agregar logout en navbar/sidebar.
4. Integrar permisos en componentes (ej: ocultar botones según rol).

## Recursos y plantillas

- Plantilla dashboard elegida: [Creative Tim Tailwind Dashboard](https://www.creative-tim.com/twcomponents/component/dashboard)
- Guía oficial de integración Tailwind + Angular: [TailwindCSS Angular Guide](https://tailwindcss.com/docs/installation/framework-guides/angular)
- Biblioteca de iconos Material: [Google Material Icons](https://fonts.google.com/icons)

Consulta la [documentación oficial de Angular](https://angular.io/docs) para obtener más información sobre cómo desarrollar aplicaciones Angular.

https://stackblitz.com/edit/ngx-toastr?file=app%2Fapp.component.ts

## Configuración
1. Copia `src/environments/environment.example.ts` a `src/environments/environment.ts`.
2. Edita `environment.ts` con tus URLs locales.
3. Para producción, configura `environment.prod.ts` en el servidor.