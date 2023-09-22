'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('pokemons', {
      Id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      coachName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      level: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      avaliablePokemonId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'availablePokemons', // Nome da tabela referenciada
          key: 'ID', // Nome da coluna na tabela referenciada
        },
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('pokemons');
  },
};
