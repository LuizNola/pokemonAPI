const express = require('express')
const avaliablePokemonController = require('../controller/avaliable.controller')

const router = express.Router()

router.post('/', (req, res) => avaliablePokemonController.createAvaliablePokemon(req, res))
router.delete('/:id', (req, res) => avaliablePokemonController.deleteAvaliablePokemon(req, res))

module.exports = router
