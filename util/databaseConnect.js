const Sequelize = require('sequelize');

const sequelize = new Sequelize('booking-appoint', 'root', 'sshekamz', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;


