const sequelize = require('./infra/sequelize/sequelize')
const dotenv = require('dotenv')
const app = require('./infra/api/server')

dotenv.config()
const PORT = process.env.PORT

app.listen(PORT, () => {
  sequelize.authenticate()
    .then(() => {
      console.log('Conexão com o banco de dados estabelecida com sucesso.')
    })
    .catch((err) => {
      console.error('Erro ao conectar-se ao banco de dados:', err)
    })

  console.log('Servidor iniciano na porta ' + PORT)
})
