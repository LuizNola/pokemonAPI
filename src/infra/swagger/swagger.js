const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json' // Caminho para o arquivo de saída JSON
const endpointsFiles = ['../../routes/index.routes.js'] // Caminho para seus arquivos de rotas

swaggerAutogen(outputFile, endpointsFiles).then(() => {
  console.log('Documentação do Swagger gerada com sucesso!')
})
