const express = require('express');
const pokemonRouter = require('./pokemon.routes')

const router = express.Router();

router.get('/healthcheck', async (_req, res) => res.status(200).end("ok"))

router.use('/pokemon', pokemonRouter)

module.exports = router