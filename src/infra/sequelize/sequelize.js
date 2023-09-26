const Sequelize = require('sequelize')
const config = require('./config')

console.log(process.env.NODE_ENV)
const sequelize = new Sequelize(process.env.NODE_ENV === 'test' ? config.test : config.development)

module.exports = sequelize
