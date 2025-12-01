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

## Ejecución

Para ejecutar el proyecto en modo de desarrollo, utiliza el siguiente comando:

```
ng serve
```

Luego, abre tu navegador y dirígete a `http://localhost:4200/`.

## Construcción

Para construir el proyecto para producción, ejecuta:

```
ng build --prod
```

Los archivos generados estarán en la carpeta `dist/`.

## Notas

Asegúrate de tener instalada la versión correcta de Angular CLI y Node.js antes de ejecutar los comandos anteriores.

## Recursos y plantillas

- Plantilla dashboard elegida: [Creative Tim Tailwind Dashboard](https://www.creative-tim.com/twcomponents/component/dashboard)
- Guía oficial de integración Tailwind + Angular: [TailwindCSS Angular Guide](https://tailwindcss.com/docs/installation/framework-guides/angular)
- Biblioteca de iconos Material: [Google Material Icons](https://fonts.google.com/icons)

Consulta la [documentación oficial de Angular](https://angular.io/docs) para obtener más información sobre cómo desarrollar aplicaciones Angular.