const express = require('express')

const PORT = 3000;

const app = express();

app.get('/', (req, res) => {
    res.send('hello world teste')
})

app.listen(PORT, () => {
    console.log("Servidor iniciano na porta " + PORT)
})