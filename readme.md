# Proyecto de Automatización con Cypress

Este proyecto contiene pruebas automatizadas para la aplicación en el entorno de staging de Fortesza utilizando Cypress.

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado lo siguiente:

- [Node.js](https://nodejs.org/) (versión 12 o superior)
- [npm](https://www.npmjs.com/) (generalmente se instala junto con Node.js)

## Instalación

1. Clona este repositorio en tu máquina local:

   ```bash
   git clone <URL_del_repositorio>
   cd <nombre_del_directorio_del_proyecto>

2. Instala dependencias 
npm install

##  Estructura del Proyecto
cypress/: Carpeta que contiene todas las pruebas de Cypress.

e2e/: Contiene las pruebas E2E (end-to-end).
fixtures/: Contiene datos de prueba que pueden ser reutilizados en las pruebas.
support/: Contiene archivos de soporte como comandos personalizados.
cypress.config.js: Archivo de configuración de Cypress.

package.json: Contiene la información del proyecto y las dependencias requeridas.


## Ejecución de Pruebas
Para ejecutar las pruebas, puedes utilizar los siguientes comandos:

Interfaz Gráfica
Abre la interfaz de Cypress para ejecutar y depurar las pruebas:

npx cypress open
 


