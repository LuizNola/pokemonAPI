const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const endpointsFiles = ['../../routes/index.routes.js']

swaggerAutogen(outputFile, endpointsFiles).then(() => {
  console.log('Documentação do Swagger gerada com sucesso!')
})
