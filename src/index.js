const express = require('express')
const sequelize = require('./infra/sequelize/sequelize');
const routes = require("./routes/index.routes")

const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./infra/swagger/swagger_output.json');

const PORT = 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", routes)
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.listen(PORT, () => {
  
  sequelize.authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados estabelecida com sucesso.');
  })
  .catch((err) => {
    console.error('Erro ao conectar-se ao banco de dados:', err);
  });

  console.log("Servidor iniciano na porta " + PORT);
    
})