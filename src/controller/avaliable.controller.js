const service = require('../service/avaliablePokemon.service')
const verifyParams = require('./helpers/verifyParamans.helper')

async function createAvaliablePokemon (req, res) {
  const params = {
    nome: req.body.nome
  }

  const verify = verifyParams(params)
  if (verify) {
    return res.status(400).json(verify)
  }

  const result = await service.createAvaliablePokemon(params)

  if (res.success) {
    return res.status(result.status)
  }

  return res.status(result.status).json({ Error: result.message })
}

async function deleteAvaliablePokemon (req, res) {
  const result = await service.deleteAvaliablePokemon(req.params.id)

  if (res.success) {
    return res.status(result.status)
  }

  return res.status(result.status).json({ Error: result.message })
}

module.exports = {
  createAvaliablePokemon,
  deleteAvaliablePokemon
}
