// Carga las variables de entorno desde un archivo .env
require('dotenv').config();

// Importa el módulo Sequelize de la biblioteca sequelize
const { Sequelize } = require('sequelize');

// Crea una instancia de Sequelize utilizando las variables de entorno para la configuración de la base de datos
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
  port: process.env.DB_PORT,
});

// Exporta la instancia de Sequelize para que pueda ser utilizada en otros módulos
module.exports = sequelize;