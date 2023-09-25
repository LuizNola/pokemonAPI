const service = require("../service/pokemon.service")
const verifyParams = require("./helpers/verifyParamans.helper")

async function createPokemon (req, res) {
    const params = {
        tipo: req.body.tipo,
        treinador: req.body.treinador
    }

    const verify = verifyParams(params)
    if(verify){
        return res.status(400).json(verify)
    }
  
    const result = await service.createPokemon(params)
    
    if(result.success) {
        return res.status(200).json(result.data)
    }else {
        return res.status(400).json({"Error": result.message})
    }
}

async function editPokemon (req, res) {
    const params = {
        id: req.params.id,
        treinador: req.body.treinador
    }

    const verify = verifyParams(params)    
    if(verify){
        return res.status(400).json(verify)
    }

    const result = await service.editPokemon(params)

    if(!result.success){
        return res.status(400).json({"Error": result.message})
    }
    return res.status(204).send()

}

async function deletePokemon (req,res) {
    const result = await service.deletePokemon(req.params.id)

    if(!result.success){
        return res.status(400).json({"Error": result.message})
    }

    return res.status(204).send()

}

async function findOnePokemon(req, res) {
    const result = await service.findOnePokemon(req.params.id)

    if(!result.success){
        return res.status(400).json({"Error": result.message})
    }

    return res.status(200).json({
        "id": result.data.id,
        "tipo": result.data.AvailablePokemon.name,
        "treinador": result.data.coachName,
        "nivel": result.data.level
    })
}

async function getAllPokemons(req, res) {
    const result = await service.getAllPokemons(req, res)

    return res.status(200).json(result.map((pokemon) => {
        return {"id": pokemon.id,
        "tipo": pokemon.AvailablePokemon.name,
        "treinador": pokemon.coachName,
        "nivel": pokemon.level}
    }))
}

module.exports = {
    createPokemon,
    editPokemon,
    deletePokemon,
    findOnePokemon,
    getAllPokemons
}