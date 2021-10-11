'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      userName: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      adress: {
        type: Sequelize.STRING,
        allowNull: false
      },
      adress2: {
        type: Sequelize.STRING
      },
      country: {
        type: Sequelize.STRING,
        allowNull: false
      },
      state: {
        type: Sequelize.STRING,
        allowNull: false
      },
      zip: {
        type: Sequelize.STRING,
        allowNull: false
      },
      nameOfCard: {
        type: Sequelize.STRING,
        allowNull: false
      },
      creditCarNumber: {
        type: Sequelize.STRING,
        allowNull: false
      },
      expiration: {
        type: Sequelize.STRING,
        allowNull: false
      },
      cvv: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      token: {
        type: Sequelize.STRING
      },
      tokenReset: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};