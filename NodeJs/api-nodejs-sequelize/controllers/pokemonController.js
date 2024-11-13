const { Pokemon } = require('../models');

// Controlador para obtener todos los Pokémon con paginación
exports.getAllPokemon = async (req, res) => {
  try {
    // Busca todos los Pokémon
    const pokemonData = await Pokemon.findAll();
    res.status(200).json(pokemonData); // Responde con los datos de los Pokémon
  } catch (err) {
    const message = "Failed to get pokemon"; // Mensaje de error
    res.status(500).json({ message, error: err }); // Responde con un error 500 y el mensaje de error
  }
}

// Controlador para obtener un Pokémon por su ID
exports.getPokemonById = async (req, res) => {
  try {
    // Busca un Pokémon por su ID
    const pokemonData = await Pokemon.findByPk(req.params.id);
    if (!pokemonData) {
      res.status(404).json({ message: 'No pokemon found with that id!' }); // Responde con un error 404 si no se encuentra el Pokémon
      return;
    }
    res.status(200).json(pokemonData); // Responde con los datos del Pokémon
  } catch (err) {
    const message = "Failed to get pokemon"; // Mensaje de error
    res.status(500).json({ message, error: err }); // Responde con un error 500 y el mensaje de error
  }
}

// Controlador para crear un nuevo Pokémon
exports.createPokemon = async (req, res) => {
  try {
    const { name, type, level, attack, defense } = req.body; // Obtiene los datos del cuerpo de la solicitud
    // Crea un nuevo Pokémon con los datos proporcionados
    const newPokemon = await Pokemon.create({
      name,
      type,
      level,
      attack,
      defense,
    });
    res.status(200).json(newPokemon); // Responde con los datos del nuevo Pokémon
  } catch (err) {
    const message = "Failed to create new pokemon"; // Mensaje de error
    res.status(400).json({ message, error: err }); // Responde con un error 400 y el mensaje de error
  }
}

// Controlador para actualizar un Pokémon existente
exports.updatePokemon = async (req, res) => {
  try {
    const { name, type, level, attack, defense } = req.body; // Obtiene los datos del cuerpo de la solicitud
    // Busca un Pokémon por su ID
    const pokemon = await Pokemon.findByPk(req.params.id);
    if (!pokemon) {
      res.status(404).json({ message: 'No pokemon found with that id!' }); // Responde con un error 404 si no se encuentra el Pokémon
      return;
    }

    // Actualiza los datos del Pokémon
    pokemon.name = name;
    pokemon.type = type;
    pokemon.level = level;
    pokemon.attack = attack;
    pokemon.defense = defense;

    await pokemon.save(); // Guarda los cambios en la base de datos

    res.status(200).json(pokemon); // Responde con los datos del Pokémon actualizado
  } catch (err) {
    const message = "Failed to update pokemon"; // Mensaje de error
    res.status(500).json({ message, error: err }); // Responde con un error 500 y el mensaje de error
  }
}

// Controlador para eliminar un Pokémon por su ID
exports.deletePokemon = async (req, res) => {
  try {
    // Busca un Pokémon por su ID
    const pokemon = await Pokemon.findByPk(req.params.id);
    if (!pokemon) {
      res.status(404).json({ message: 'No pokemon found with that id!' }); // Responde con un error 404 si no se encuentra el Pokémon
      return;
    }
    await pokemon.destroy(); // Elimina el Pokémon de la base de datos
    res.status(200).json({ message: 'Pokemon deleted!' }); // Responde con un mensaje de éxito
  } catch (err) {
    const message = "Failed to delete pokemon"; // Mensaje de error
    res.status(500).json({ message, error: err }); // Responde con un error 500 y el mensaje de error
  }
}