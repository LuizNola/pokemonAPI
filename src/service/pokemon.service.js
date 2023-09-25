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
            status: 400,
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
        status: 200,
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
            status: 400,
            message: "Pokemon não encontrado!"
        }
    }
    return {
        success: true,
        status: 204
    }
}

async function deletePokemon(id) {
    
    const result = await Pokemon.destroy({where: {id}})

    if(!result){
        return {
            success: false,
            status: 400,
            message: "Pokemon não encontrado!"
        }
    }
    return {
        success: true,
        status: 204
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
            status: 400,
            message: "Pokemon não encontrado"
        }
    }

    return {
        success: true,
        status: 200,
        data: pokemon
    }
}

async function getAllPokemons() {
    const result = await Pokemon.findAll({include: [
        {
          model: AvaliablePokemon,
          attributes: ["id","name"],
        },
      ]})

    return result
}

async function levelAdd(pokemonId) {
  const {data: pokemon} = await findOnePokemon(pokemonId);
  return await pokemon.update({ level: pokemon.level + 1 });
}

async function levelSubtract(pokemonId) {
    const {data: pokemon} = await findOnePokemon(pokemonId);
    if (pokemon.level === 1) {
      await deletePokemon(pokemonId);
    }
    return await pokemon.update({ level: pokemon.level - 1 });
}

module.exports = {
    createPokemon, 
    editPokemon, 
    deletePokemon, 
    findOnePokemon, 
    getAllPokemons,
    levelSubtract,
    levelAdd
}