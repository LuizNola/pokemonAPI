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
        return res.status(200).json(result.result)
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

module.exports = {
    createPokemon,
    editPokemon
}