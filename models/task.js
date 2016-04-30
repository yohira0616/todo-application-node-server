var Sequelize = require('sequelize');

var sequelize = require('../common/connection');

var Task = sequelize.define('task', {
  header: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

Task.sync();

module.exports = Task;

