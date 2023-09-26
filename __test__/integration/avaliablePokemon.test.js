const request = require('supertest')
const app = require('../../src/infra/api/server')

describe('[e2e] Test createAvaliablePokemon', () => {
    it('should create Avaliable pokemon', async () => {
      const res = await request(app)
        .post('/pokemonsvalidos/')
        .send(
          {
            nome: 'pichu'
          }
        )
  
      expect(res.statusCode).toBe(201)
     
    })
  
    it('should failed at create avaliable pokemon, missing name param', async () => {
      const res = await request(app)
        .post('/pokemonsvalidos/')
        .send(
          {
            name: 'pichu' //parametro escrito errado
          }
        )
  
      expect(res.statusCode).toBe(400)
      expect(res.text).toBe('{"Error":"Faltam os seguintes campos: nome"}')
    })
  
    it('should failed create Avaliable pokemon, pokemon already exist', async () => {
        await request(app)
        .post('/pokemonsvalidos/')
        .send(
          {
            nome: 'pichu'
          }
        )
       
        const res = await request(app)
          .post('/pokemonsvalidos/')
          .send(
            {
              nome: 'pichu'
            }
          )
    
        expect(res.statusCode).toBe(400)
        expect(res.body.Error).toBe("Esse Pokemon ja esta registrado")
       
      })
    
  })