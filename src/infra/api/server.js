const express = require('express')

const routes = require('../../routes/index.routes')

const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('../swagger/swagger_output.json')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', routes)
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))

module.exports = app
