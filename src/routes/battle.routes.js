const express = require('express');
const battleController = require('../controller/battle.controller')

const router = express.Router();

router.post('/:pokemonAId/:pokemonBId', (req, res) => battleController.goBattle(req, res))

module.exports = router