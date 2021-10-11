'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Event);
    }
  };
  User.init({
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userName: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    adress: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    adress2: DataTypes.STRING,
    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    zip: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nameOfCard: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    creditCardNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    expiration: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cvv: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    token: DataTypes.STRING,
    tokenReset: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};