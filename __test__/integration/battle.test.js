const request = require("supertest")
const app = require("../../src/infra/api/server")

describe("[e2e] test battle", () => {
    it('should init battle pokemon', async () => {
        const pokemonA = await request(app)
        .post('/pokemons/')
        .send(
            {
                "tipo": "pikachu",
                "treinador": "thiago"
            }
        )

        const pokemonB = await request(app)
        .post('/pokemons/')
        .send(
            {
                "tipo": "mewtwo",
                "treinador": "thiago"
            }
        )

        const res = await request(app)
        .post(`/batalhar/${pokemonA.body.id}/${pokemonA.body.id}`)
        .send(
            {
                "tipo": "mewtwo",
                "treinador": "thiago"
            }
        )

        expect(res.statusCode).toBe(200)
        expect(res.body).toHaveProperty("vencedor")
        expect(res.body).toHaveProperty("perdedor")  
    })

    it('should failed init battle pokemon, a pokemon doesnt exist', async () => {
        const pokemonA = await request(app)
        .post('/pokemons/')
        .send(
            {
                "tipo": "pikachu",
                "treinador": "thiago"
            }
        )

        const res = await request(app)
        .post(`/batalhar/${pokemonA.body.id}/999`)
        .send(
            {
                "tipo": "mewtwo",
                "treinador": "thiago"
            }
        )

        expect(res.statusCode).toBe(400)
        expect(res.text).toBe('{"Error":"Um dos pokemons não existe!"}')
        
    })
})