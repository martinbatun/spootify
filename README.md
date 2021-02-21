# spootify
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version ~9.1.0.

## Este proyecto cuenta con:

  > Estructura base de dashboard con css responsiva como:
    * Sidebar
    * Navbar

  > Servicios programados y optimizados como:
    * servicio de api las cuales son en la cual se realizaran todas las peticiones a un servidor este servicio esta optimizado para las peticiones correspondientes como GET, POST, PUT, PATCH y DELETE y dentro de este se encuentra el intercepton encargado de insertar el token antes de hacer alguna peticiones.
    * servicio de errores este servicio es el encargado de leer los tipos de codigos de respuesta de errores por parte del servidor y desplegar visualmente una alerta al usuario y posteriormente reaccionar a dichos codigos de errores
    * servicio para ejecutar un loader

  > rutas de las vistas:
    * cuenta con un archivo app-routing en el cual se definen las rutas de los modulos que se crearan desntro del dashboard este modulo de dashboard
    * Teniendo en cuenta que el proyecto esta pensado para desarrollar implementando la tecnica de lazy load para generar nuevos modulos y componentes

  > Shared
    * es un folder en el cual se encuentran todos los componentes que se se comparten entre las vistas asi como para generar nuevos componentes

  > carga diferida de los files de tipo `loading="lazy"` el cual proporciona una carga mas rapida y necesaria



## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Pasos para iniciar un nuevo proyecto con la estructura base

1 installar las librerias con `npm install`

2 iniciar el proyecto con `ng s`
