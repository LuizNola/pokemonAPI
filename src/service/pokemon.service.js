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
        data: {
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

async function deletePokemon(id) {
    
    const result = await Pokemon.destroy({where: {id}})

    if(!result){
        return {
            success: false,
            message: "Pokemon não encontrado!"
        }
    }
    return {
        success: true
    }
}

async function findOnePokemon(id) {
    const pokemon = await Pokemon.findOne(
        {where: {id},
        include: [
            {
              model: AvaliablePokemon,
              attributes: ["id","name"],
            },
          ],
        })

    if(!pokemon) {
        return {
            success: false,
            message: "Pokemon não encontrado"
        }
    }

    return {
        success: true,
        data: {
            "id": pokemon.id,
            "tipo": pokemon.AvailablePokemon.name,
            "treinador": pokemon.coachName,
            "nivel": pokemon.level
        }
    }
}
module.exports = {createPokemon, editPokemon, deletePokemon, findOnePokemon}