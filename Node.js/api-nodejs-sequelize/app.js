// Importa el módulo express
const express = require('express');
// Crea una aplicación de Express
const app = express();
// Importa las rutas de Pokémon
const pokemonRoutes = require('./routes/pokemonRoutes');

// Middleware para parsear el cuerpo de las solicitudes como JSON
app.use(express.json());

// Usa las rutas de Pokémon bajo el prefijo /api/v1
app.use('/api/v1', pokemonRoutes);

module.exports = app; // Exporta la aplicación para que pueda ser utilizada en otros módulos