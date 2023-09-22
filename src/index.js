const express = require('express')
const Sequelize = require('sequelize');
const dbConfig = require('./infra/sequelize/config');

const PORT = 3000;

const app = express();

app.get('/', (req, res) => {
    res.send('hello world teste');
})

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