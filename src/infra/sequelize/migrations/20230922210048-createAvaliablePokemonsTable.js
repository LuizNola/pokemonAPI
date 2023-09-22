'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('availablePokemons', {
      ID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });

    await queryInterface.bulkInsert('availablePokemons', [
      { name: 'pikachu' },
      { name: 'charizard' },
      { name: 'mewtwo' },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('availablePokemons');
  }
};
