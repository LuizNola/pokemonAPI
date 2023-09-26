const Sequelize = require('sequelize')
const config = require('./config')

const sequelize = new Sequelize(process.env.NODE_ENV === 'test' ? config.test : config.development)

module.exports = sequelize
