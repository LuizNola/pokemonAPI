const request = require('supertest')
const app = require('../../src/infra/api/server')

describe('[e2e] Test createPokemon', () => {
  it('should create pokemon', async () => {
    const res = await request(app)
      .post('/pokemons/')
      .send(
        {
          tipo: 'pikachu',
          treinador: 'thiago'
        }
      )

    expect(res.statusCode).toBe(200)
    expect(res.body).toHaveProperty('id')
    expect(res.body).toHaveProperty('tipo')
    expect(res.body).toHaveProperty('treinador')
    expect(res.body).toHaveProperty('nivel')
  })

  it('should failed at create pokemon, missing tipo param', async () => {
    const res = await request(app)
      .post('/pokemons/')
      .send(
        {
          treinador: 'thiago'
        }
      )

    expect(res.statusCode).toBe(400)
    expect(res.text).toBe('{"Error":"Faltam os seguintes campos: tipo"}')
  })

  it('should failed at create pokemon, missing treinador param', async () => {
    const res = await request(app)
      .post('/pokemons/')
      .send(
        {
          tipo: 'pikachu'
        }
      )

    expect(res.statusCode).toBe(400)
    expect(res.text).toBe('{"Error":"Faltam os seguintes campos: treinador"}')
  })

  it('should failed at create pokemon, invalid pokemon', async () => {
    const res = await request(app)
      .post('/pokemons/')
      .send(
        {
          tipo: 'pichu',
          treinador: 'thiaguinho'
        }
      )

    expect(res.statusCode).toBe(400)
    expect(res.text).toBe('{"Error":"O Pokemon não existe!"}')
  })
})

describe('[e2e] Test editPokemon', () => {
  it('should edit pokemon', async () => {
    const createdPokemon = await request(app)
      .post('/pokemons/')
      .send(
        {
          tipo: 'pikachu',
          treinador: 'thiago'
        }
      )

    const res = await request(app)
      .put('/pokemons/' + createdPokemon.body.id)
      .send({
        treinador: 'Luiz'
      })

    expect(res.statusCode).toBe(204)
  })

  it("should failed at edit pokemon, pokemon don't exist", async () => {
    const res = await request(app)
      .put('/pokemons/' + 999)
      .send({
        treinador: 'Luiz'
      })

    expect(res.statusCode).toBe(400)
    expect(res.text).toBe('{"Error":"Pokemon não encontrado!"}')
  })

  it('should failed at edit pokemon, missing treinador param', async () => {
    const createdPokemon = await request(app)
      .post('/pokemons/')
      .send(
        {
          tipo: 'pikachu',
          treinador: 'thiago'
        }
      )

    const res = await request(app)
      .put('/pokemons/' + createdPokemon.body.id)
      .send({})

    expect(res.statusCode).toBe(400)
    expect(res.text).toBe('{"Error":"Faltam os seguintes campos: treinador"}')
  })
})

describe('[e2e] Test deletePokemon', () => {
  it('should delete pokemon', async () => {
    const createdPokemon = await request(app)
      .post('/pokemons/')
      .send(
        {
          tipo: 'pikachu',
          treinador: 'thiago'
        }
      )

    const res = await request(app)
      .delete('/pokemons/' + createdPokemon.body.id)

    expect(res.statusCode).toBe(204)
  })

  it("should failed at delete pokemon, pokemon don't exist", async () => {
    const res = await request(app)
      .delete('/pokemons/' + 999)

    expect(res.statusCode).toBe(400)
    expect(res.text).toBe('{"Error":"Pokemon não encontrado!"}')
  })
})

describe('[e2e] Test findOnePokemon', () => {
  it('should find one pokemon', async () => {
    const createdPokemon = await request(app)
      .post('/pokemons/')
      .send(
        {
          tipo: 'pikachu',
          treinador: 'thiago'
        }
      )

    const res = await request(app)
      .get('/pokemons/' + createdPokemon.body.id)

    expect(res.statusCode).toBe(200)
    expect(res.body).toHaveProperty('id')
    expect(res.body).toHaveProperty('tipo')
    expect(res.body).toHaveProperty('treinador')
    expect(res.body).toHaveProperty('nivel')
  })

  it("should failed at find one pokemon, pokemon don't exist", async () => {
    const res = await request(app)
      .get('/pokemons/' + 999)

    expect(res.statusCode).toBe(400)
    expect(res.text).toBe('{"Error":"Pokemon não encontrado"}')
  })
})

describe('[e2e] Test findAllPokemons', () => {
  it('should find all pokemons, but there are no pokemons', async () => {
    const res = await request(app)
      .get('/pokemons/')

    expect(res.statusCode).toBe(200)
    // expect(res.body).toHaveLength(0);
  })

  it('should find all pokemons', async () => {
    await request(app)
      .post('/pokemons/')
      .send(
        {
          tipo: 'pikachu',
          treinador: 'thiago'
        }
      )

    const res = await request(app)
      .get('/pokemons/')

    expect(res.statusCode).toBe(200)
    // expect(res.body).toHaveLength(1);
  })
})
