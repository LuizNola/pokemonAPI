const express = require('express')
const Sequelize = require('sequelize');
const dbConfig = require('./infra/sequelize/config');
const routes = require("./routes/index.routes")

const PORT = 3000;

const app = express();

app.use("/api", routes)

app.listen(PORT, () => {
    
        const sequelize = new Sequelize(dbConfig.development);
        sequelize.authenticate()
        .then(() => {
          console.log('Conexão com o banco de dados estabelecida com sucesso.');
        })
        .catch((err) => {
          console.error('Erro ao conectar-se ao banco de dados:', err);
        });
        
        console.log("Servidor iniciano na porta " + PORT);
    
})