var express = require('express');
var router = express.Router();

var TaskRepository = require('../repository/task.repository');
var Task = require('../models/task');

router.get('/all', function (req, res, next) {
    Task.findAll().then(function (result) {
        console.log(result);
        res.send(result);
    });
});

router.all('/new', function (req, res, next) {
    console.log(req.body);
    var param = req.body;
    Task.create(param).then(function () {
        res.send('done');
    });
});

router.all('/done', function (req, res, next) {
    var param = req.body;
    Task.destroy({
        where: {
            id: param.id
        }
    }).then(function () {
        res.send('done');
    });
});


module.exports = router;