# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

---

## Instalación y Configuración

### Base de Datos (BDD)

#### Requisitos Previos

Antes de configurar la base de datos, hay que tener instalado:

- PostgreSQL

#### Configuración

1. *Creación de la Base de Datos:*
   - Abrir el sistema de gestión de bases de datos y crear una nueva base de datos con el nombre "nublense_db", que por defecto este sería el nombre de la base de datos ya que se encuentra especificado en el archivo .env .
   
   bash

     yarn db:create
     

2. *Levantamiento de la Base de Datos:*
   - Iniciar el servicio de PostgreSQL utilizando el comando específico para tu sistema operativo.


### API

#### Requisitos Previos

Asegúrate de tener instalado:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) o [Yarn](https://yarnpkg.com/) (gestores de paquetes de Node.js)

#### Configuración

1. *Instalación de Dependencias:*
   bash

   yarn install
   

2. *Variables de Entorno:*
   - Crea un archivo `.env` en la raíz del proyecto y configura las variables necesarias, como las credenciales de la base de datos, utilizando el nombre "nublense_db".

3. *Levantamiento de la API:*
   bash

   yarn dev
   

4. *Comandos Específicos:*
   - Ejecutar este comando para realizar operaciones adicionales migraciones:
     bash

     yarn sequelize db:migrate

     yarn sequelize-cli db:seed:all
     



Documentación Postman: https://documenter.getpostman.com/view/26381834/2s9YRGwoW8