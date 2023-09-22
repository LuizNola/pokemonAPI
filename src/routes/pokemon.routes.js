const express = require('express');
const router = express.Router();

router.get('/healthcheck', async (_req, res) => res.status(200).end("ok"))

module.exports = router