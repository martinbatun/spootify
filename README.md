# spootify
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version ~9.1.0.

## Este proyecto cuenta con:

  > Estructura base de autenticacion con css responsiva como:
    * Vista de login
    * Vista de recuperar contraseña
    * Vista de solicitar acceso

  > Estructura base de dashboard con css responsiva como:
    * Sidebar
    * Navbar
    * Estilos de tabla para desktop
    * Estilos de tarjetas para mobiles
    * filtros basicos introducidos desde un servicio

  > Servicios programados y optimizados como:
    * servicio de api las cuales son en la cual se realizaran todas las peticiones a un servidor este servicio esta optimizado para las peticiones correspondientes como GET, POST, PUT, PATCH y DELETE y dentro de este se encuentra el intercepton encargado de insertar el token antes de hacer alguna peticiones.
    * dentro del interceptor se encuentran dos lineas de cofigo comentadas las cuales tendrian que ser descomentadas para poder acceder alas urls del backend configuradas en los environments
    * servicio de errores este servicio es el encargado de leer los tipos de codigos de respuesta de errores por parte del servidor y desplegar visualmente una alerta al usuario y posteriormente reaccionar a dichos codigos de errores
    * servicio de tabla que permite la coneccion entre el formulario mostrado en un modal y la tabla listada
    * servicio de filtros en este servicio es el encargado de insertar el filtro y posteriromemte realizar la peticion al servidor, este servicio soporta filtros de typo : boolean, number, date y string

  > rutas de las vistas:
    * cuenta con un archivo app-routing en el cual se definen las rutas de los modulos que se crearan desntro del dashboard este modulo de dashboard cuenta con un guard para protejer su acceso a usuarios no autorizados
    * Teniendo en cuenta que el proyecto esta pensado para desarrollar implementando la tecnica de lazy load para generar nuevos modulos y componentes


  > helpers
    * cuenta con un archivo custom-password el cual se encarga de validar las contraseñas haciendolas que sean mas seguras validando un formato requerido para poder ser validas asi como valida la igualdad de las contraseñas con el campo repetir contraseña esta helper es utilizado para los formularios de registro

  > Shared
    * es un folder en el cual se encuentran todos los componentes que se se comparten entre las vistas asi como para generar nuevos componentes

  > Script para ahorar tiempo ubicados en la carpeta bash como:
    * rename.sh es un script que al ejecutarce recorer toto el proyecto y renombrar el proyecto por el nuevo nuevonombre raiz de la carpeta
    * change-repository.sh este script realiza el proceso de cambiarte de repositoro elimienado el actual e inicia el proceso y commit initial en el nuevo repositorio solamente necesitas la url del nuevo repositorio  
    * deploy.sh estos script son utilizados para configurar el bucket del s3 al cual se subira el proyecto en este proyecto esta configurado los tren entornos necesarios el de desarrollo, pruebas y produccion solamnete necesitar poner la url del backend en su environment correspondiente y configurar el bucket de cada entorno para poder utilizar el Script




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

## Renombra el proyecto
Para renombrar el proyeto ejecutar el archivo rename.sh de la siguiente manera `./rename.sh`. esto renombrara el proyecto de manera global, sera necesario volver a encontrar el proyecto en la terminal para iniciarlo nuevamente

## Instalar las librerias
Para correr el proyecto primero se instalan las librerias necesarias con el comando `npm install`


## Pasos para iniciar un nuevo proyecto con la estructura base

1 Crear un folder y nombrarlo como quiere que se nombre el proyecto

2 Clonar el proyecto de la siguinete manera el punto final es importante conservarlo `git clone https://martinbatun@bitbucket.org/dacodes/angular-boilerplate.git .`
3 Aceeder al folder bash que se encuentra en el proyecto y ejecutar el scritp `./rename.sh`

4 installar las librerias con `npm install`

5 iniciar el proyecto con `ng s`


## Para poder alojar el proyecto ya inicializado al repositorio final
Ejecutar el script `./change-repository` ubicado en el folder de bash

## Para poder sSubir al Servidor S3
Configurar perfil aws: [aws configure --profile spootify](https://docs.aws.amazon.com/es_es/cli/latest/userguide/cli-configure-profiles.html)
el script que ejecuto para renombrar el proyecto le facilita copiar y pegar este nombre de de perfil de aws el cual ya fue importado en el bash para el deploy en caso que utilize otro configurarlo en el script `./deploy.sh`

Listar perfiles aws: `aws s3 ls`
