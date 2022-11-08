const Sequelize = require('sequelize');

const sequelize = require('../util/databaseConnect');

const User = sequelize.define('users', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false
      },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique:true
      },
    phonenumber: {
      type:Sequelize.INTEGER,
      unique:true,  
      allowNull:false
    }
    
    
  });
  
  module.exports = User;
  