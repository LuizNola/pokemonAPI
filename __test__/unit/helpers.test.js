const findNullFields = require('../../src/controller/helpers/verifyParamans.helper')

describe('[unit] test findNullFields', () => {
  it('should return null fields, treinador field is undefined', () => {
    const res = findNullFields({ tipo: 'pikachu', treinador: undefined })

    expect(res.Error).toBe('Faltam os seguintes campos: treinador')
  })

  it('should return null fields, treinador field is undefined', () => {
    const res = findNullFields({ tipo: 'pikachu', treinador: 'ash' })

    expect(res).toBe(false)
  })
})
