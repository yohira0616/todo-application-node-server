var Task = require('../models/task');

module.exports = {
    getAll: function () {
        return "";
    },
    create: function (param) {
        Task.create({
            header: param.header
        });
    },
    delete: function (param) {

    }
};