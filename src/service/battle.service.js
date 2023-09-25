const pokemonService = require('./pokemon.service')


async function goBattle({pokemonAId, pokemonBId}) {
    try {
        const {data: pokemonA } = await pokemonService.findOnePokemon(pokemonAId)
        const {data: pokemonB } = await pokemonService.findOnePokemon(pokemonBId)
       
        const winProbabilityPokemonA = pokemonA.level / (pokemonB.level + pokemonA.level)

        const result = Math.random() < winProbabilityPokemonA ? "pokemonA" : "pokemonB"
        
        const winner = await pokemonService.levelAdd(result === "pokemonA" ? pokemonA.id : pokemonB.id )
        const loser = await pokemonService.levelSubtract(result === "pokemonA" ? pokemonB.id : pokemonA.id )
      
        return {
            success: true,
            status: 200,
            data: {
                winner,
                loser
            }
        }
        

    } catch (err) {
        return {
            success: false,
            status: 400,
            message: "Um dos pokemons não existe!"
        }
    }
}

module.exports = {goBattle}