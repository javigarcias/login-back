# Backend CRUD SQL

_Es un ejemplo para la creación de un Backend con una base de datos relacional MySQL_

## Comenzando 🚀

_Para obtener el repositorio:_

 * [Git clone](https://github.com/javigarcias/login-back.git)

### Pre-requisitos 📋

```
npm install
npm i sequelize express mysql2 bcryptjs dotoenv jsonwebtoken nodemailer
```
### Ejecutando 

```
nodemon app.js
```

### DB 

_Creación de la Base de datos y las tablas_

```
sequelize db:create
sequelize db:migrate
```
### Endpoints 
- /users:
    - POST /register
    - POST /login
    - PUT /:email
    - GET /
    - GET /:username
    - DELETE /:username
- /events:
    - POST /
    - PUT /:id
    - GET /
    - DELETE /:id


## Ejecutando las pruebas ⚙️

* [HEROKU TEST](https://login-back-sql.herokuapp.com)

## Construido con 🛠️

_Tecnologías utilizadas en el proyecto_

- Javascript
- NodeJS
- Express
- Sequelize
- MySQL
- Bcryptjs
- Dotenv
- Jsonwebtoken
- Nodemailer
- XAMPP
- MySQLWorkbench
- Postman
- Heroku
- Git
- GitHub

## Autor ✒️

* **Javier García**  - [javigarcias](https://github.com/javigarcias)
 
---
⌨️ con ❤️ por [JaviGarcia](https://www.linkedin.com/in/javigarciasanchez/) 😊