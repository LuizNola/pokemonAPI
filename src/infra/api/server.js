const express = require('express')
const cors = require('cors');

const routes = require('../../routes/index.routes')

const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('../swagger/swagger_output.json')

const allowedOrigins = ['*'];


const app = express()

app.use(cors({
    origin: allowedOrigins
}));

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', routes)
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))

module.exports = app
