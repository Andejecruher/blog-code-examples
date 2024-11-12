# API Node.js con Sequelize

Este proyecto es una API RESTful construida con Node.js, Express y Sequelize. La API permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en una base de datos de Pokémon.

## Requisitos

- Node.js
- npm o yarn
- MySQL

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/api-node-sequelize.git
   cd api-node-sequelize
    ```

2. Instala las dependencias:
    ```bash
    npm install
    
    # o si usas yarn

    yarn install
    ```

3. Crea un archivo `.env` en la raíz del proyecto con las siguientes variables de entorno:
    
    ```env
    DB_USER=usuario
    DB_PASSWORD=contraseña
    DB_NAME=nombre_bd
    DB_HOST=localhost
    PORT=3000
    ```

4. Inicia el servidor:
    ```bash
    npm start
    # o
    npm run dev
    # o si usas yarn
    yarn start
    # o
    yarn dev
    ```
La API estará disponible en `http://localhost:3000`.

## Endpoints

```markdown
# API Node.js con Sequelize

Este proyecto es una API RESTful construida con Node.js, Express y Sequelize. La API permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en una base de datos de Pokémon.

## Requisitos

- Node.js
- npm o yarn
- MySQL

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/api-node-sequelize.git
   cd api-node-sequelize
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Crea un archivo `.env` en la raíz del proyecto con la siguiente configuración:
   ```env
   DB_NAME=nombre_de_tu_base_de_datos
   DB_USER=tu_usuario
   DB_PASS=tu_contraseña
   DB_HOST=localhost
   DB_PORT=3306
   PORT=3001
   ```

4. Ejecuta las migraciones para crear las tablas en la base de datos:
   ```bash
   npx sequelize-cli db:migrate
   ```

## Uso

1. Inicia el servidor:
   ```bash
   npm start
   ```

2. La API estará disponible en `http://localhost:3001/api/v1`.

## Endpoints

- `GET /api/v1/pokemons`: Obtiene todos los Pokémon.
- `GET /api/v1/pokemons/:id`: Obtiene un Pokémon por su ID.
- `POST /api/v1/pokemons`: Crea un nuevo Pokémon.
- `PUT /api/v1/pokemons/:id`: Actualiza un Pokémon existente por su ID.
- `DELETE /api/v1/pokemons/:id`: Elimina un Pokémon por su ID.

## Estructura del Proyecto

- `config/`: Configuración de la base de datos.
- `controllers/`: Controladores de la API.
- `models/`: Modelos de Sequelize.
- `routes/`: Rutas de la API.
- `app.js`: Configuración de la aplicación Express.
- `server.js`: Punto de entrada del servidor.

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o envía un pull request.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT.

Para más detalles visita el articulo completo [Cómo crear una API con Node.js, Sequelize y MySQL para principiantes](https://andejecruher.com/blog/1).