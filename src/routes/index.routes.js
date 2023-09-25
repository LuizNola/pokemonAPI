const express = require('express');
const pokemonRouter = require('./pokemon.routes')
const battleRouter = require('./battle.routes')

const router = express.Router();

router.get('/healthcheck', async (_req, res) => res.status(200).end("ok"))

router.use('/pokemons', pokemonRouter)
router.use('/batalhar', battleRouter)

module.exports = router