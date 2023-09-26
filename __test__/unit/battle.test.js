const { goBattle } = require('../../src/service/battle.service')
const pokemonService = require('../../src/service/pokemon.service')

jest.mock('../../src/service/pokemon.service')

describe('[unit] test goBattle', () => {
  it('should init battle', async () => {
    pokemonService.findOnePokemon.mockResolvedValueOnce({
      success: true,
      status: 200,
      data: {
        id: 1,
        level: 3
      }
    })

    pokemonService.findOnePokemon.mockResolvedValueOnce({
      success: true,
      status: 200,
      data: {
        id: 2,
        level: 2
      }
    })

    pokemonService.levelAdd.mockResolvedValueOnce({
      id: 1,
      level: 4
    })

    pokemonService.levelSubtract.mockResolvedValueOnce({
      id: 2,
      level: 1
    })

    const res = await goBattle({ pokemonAId: 1, pokemonBId: 2 })

    expect(res.success).toBe(true)
    expect(res.data).toHaveProperty('winner')
    expect(res.data).toHaveProperty('loser')
  })

  it('should failed at init battle, pokemon dont exist', async () => {
    const res = await goBattle({ pokemonAId: 1, pokemonBId: 2 })

    expect(res.success).toBe(false)
    expect(res.message).toBe('Um dos pokemons não existe!')
  })
})
