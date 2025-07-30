# Mi Proyecto Angular

Este es un proyecto de ejemplo para demostrar la estructura de un proyecto Angular.

## Estructura inicial recomendada

Dentro de la carpeta `app`, crea:

- `core/` (servicios globales, guards)
- `shared/` (componentes reutilizables)
- `modules/` (dashboard, clientes, ambientes, usuarios, roles, docker)
- `layout/` (sidebar, navbar, footer, header)

Esta estructura te ayudará a organizar tu proyecto Angular de forma profesional y escalable.

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