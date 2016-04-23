var Sequelize = require('sequelize');

var sequelize = require('../common/connection');

var Task = sequelize.define('task', {
    header: {
        type: Sequelize.STRING
    }
});

Task.sync();

module.exports = Task;

