const AvailablePokemon = require('../domain/avaliablePokemon.entity')

async function createAvaliablePokemon({nome}) {
    const existPokemon = await AvailablePokemon.findOne({
        where: {
          name: nome
        }
      })

    if(existPokemon) {
        return {
            success: false,
            status: 400,
            message: "Esse Pokemon ja esta registrado",
        }
    }

    await AvailablePokemon.create({name: nome})

    return {
        success: true,
        status: 201
    }
}


async function deleteAvaliablePokemon(id) {
    const existPokemon = await AvailablePokemon.findOne({
        where: {
          id
        }
      })

    if(!existPokemon) {
        return {
            success: false,
            status: 400,
            message: "Esse Pokemon não existe",
        }
    }

    await AvailablePokemon.destroy({where: {id}})

    return {
        success: true,
        status: 204
    }
}

module.exports = {createAvaliablePokemon, deleteAvaliablePokemon}