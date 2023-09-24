const express = require('express');
const pokemonController = require('../controller/pokemon.controller')

const router = express.Router();

router.post('', (req, res) => pokemonController.createPokemon(req, res))
router.put('/:id', (req, res) => pokemonController.editPokemon(req, res))
router.delete('/:id', (req, res) => pokemonController.deletePokemon(req, res))

module.exports = router