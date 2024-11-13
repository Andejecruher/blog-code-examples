// Importa el enrutador de Express
const express = require('express');
// Crea un enrutador de Express
const router = express.Router();
// Importa el controlador de Pokémon
const pokemonController = require('../controllers/pokemonController');

// Ruta para obtener todos los Pokémon
router.get('/pokemons', pokemonController.getAllPokemon);

// Ruta para obtener un Pokémon por su ID
router.get('/pokemons/:id', pokemonController.getPokemonById);

// Ruta para crear un nuevo Pokémon
router.post('/pokemons', pokemonController.createPokemon);

// Ruta para actualizar un Pokémon existente por su ID
router.put('/pokemons/:id', pokemonController.updatePokemon);

// Ruta para eliminar un Pokémon por su ID
router.delete('/pokemons/:id', pokemonController.deletePokemon);

module.exports = router; // Exporta el enrutador para que pueda ser utilizado en otros módulos