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

async function editPokemon({id, treinador}) {
   
    const result = await Pokemon.update({coachName: treinador}, {where: {id: id}})
    if(result[0] === 0) {
        return {
            success: false,
            message: "Pokemon não encontrado!"
        }
    }
    return {
        success: true
    }
}

module.exports = {createPokemon, editPokemon}