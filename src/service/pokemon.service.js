const Pokemon = require('../domain/pokemon.entity')
const AvaliablePokemon = require('../domain/avaliablePokemon.entity')

async function createPokemon({tipo, treinador}) {

    const isAvaliablePokemon = await AvaliablePokemon.findOne({
        where: {
            name: tipo
        }
    })

    if(!isAvaliablePokemon){
        return {
            success: false,
            message: "O Pokemon não existe!" 
        }
    }


    const createdPokemon = await Pokemon.create({
        coachName: treinador,
        level: 1,
        avaliablePokemonId: isAvaliablePokemon.id, 
    })

    return {
        success: true,
        result: {
            "id": createdPokemon.id,
            "tipo": isAvaliablePokemon.name,
            "treinador": createdPokemon.coachName,
            "nivel": createdPokemon.level
        }
    }
}

module.exports = {createPokemon}