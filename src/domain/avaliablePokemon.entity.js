const { DataTypes } = require('sequelize')
const sequelize = require('../infra/sequelize/sequelize')

const AvailablePokemon = sequelize.define('AvailablePokemon', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

module.exports = AvailablePokemon
