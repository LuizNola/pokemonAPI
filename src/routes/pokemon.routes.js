const express = require('express');
const pokemonController = require('../controller/pokemon.controller')

const router = express.Router();

router.post('', (req, res) => pokemonController.createPokemon(req, res))

module.exports = router