const service = require("../service/pokemon.service")
const verifyParams = require("./helpers/verifyParamans.helper")

async function createPokemon (req, res) {
    const params = {
        tipo: req.body.tipo,
        treinador: req.body.treinador
    }

    const verify = verifyParams(params,res)
    
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

module.exports = {
    createPokemon
}