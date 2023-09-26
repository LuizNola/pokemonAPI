const service = require('../service/battle.service')

async function goBattle (req, res) {
  const params = {
    pokemonAId: req.params.pokemonAId,
    pokemonBId: req.params.pokemonBId
  }
  const result = await service.goBattle(params)

  if (result.success) {
    return res.status(result.status).json({
      vencedor: {
        id: result.data.winner.id,
        tipo: result.data.winner.AvailablePokemon.name,
        treinador: result.data.winner.coachName,
        nivel: result.data.winner.level
      },
      perdedor: {
        id: result.data.loser.id,
        tipo: result.data.loser.AvailablePokemon.name,
        treinador: result.data.loser.coachName,
        nivel: result.data.loser.level
      }
    })
  } else {
    return res.status(result.status).json({ Error: result.message })
  }
}

module.exports = {
  goBattle
}
