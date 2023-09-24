const { DataTypes } = require('sequelize');
const sequelize = require('../infra/sequelize/sequelize'); 
const AvailablePokemon = require('./avaliablePokemon.entity');

const Pokemon = sequelize.define('Pokemon', {
  coachName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  level: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  avaliablePokemonId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: AvailablePokemon, 
      key: 'id',
    },
  },
});

module.exports = Pokemon;
