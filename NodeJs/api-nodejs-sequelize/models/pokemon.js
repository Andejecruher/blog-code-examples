// Importa el módulo sequelize
const { DataTypes } = require('sequelize');
// Carga la instancia de Sequelize
const sequelize = require('../config/config');

// Define el modelo de Pokémon
const Pokemon = sequelize.define('pokemon', {
  id: {
    type: DataTypes.INTEGER, // Tipo de dato entero
    allowNull: false, // No permite valores nulos
    primaryKey: true, // Clave primaria
    autoIncrement: true, // Auto-incremento
  },
  name: {
    type: DataTypes.STRING, // Tipo de dato cadena
    allowNull: false, // No permite valores nulos
  },
  type: {
    type: DataTypes.STRING, // Tipo de dato cadena
    allowNull: false, // No permite valores nulos
  },
  level: {
    type: DataTypes.INTEGER, // Tipo de dato entero
    allowNull: false, // No permite valores nulos
  },
  attack: {
    type: DataTypes.INTEGER, // Tipo de dato entero
    allowNull: false, // No permite valores nulos
  },
  defense: {
    type: DataTypes.INTEGER, // Tipo de dato entero
    allowNull: false, // No permite valores nulos
  }
}, {
  timestamps: true, // Añade las columnas createdAt y updatedAt
});

module.exports = Pokemon; // Exporta el modelo de Pokémon