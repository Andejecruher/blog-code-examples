// Importa la configuración de la base de datos
const sequelize = require('../config/config');
// Importa el modelo de Pokémon
const Pokemon = require('./pokemon');

// Sincroniza el modelo con la base de datos y crea las tablas si no existen
sequelize.sync().then(() => {
  console.log('Database & tables created!'); // Mensaje de éxito
}).catch((err) => {
  console.log(`An error occurred: ${err}`); // Mensaje de error
});

// Exporta el modelo de Pokémon para que pueda ser utilizado en otros módulos
module.exports = {
  Pokemon,
};