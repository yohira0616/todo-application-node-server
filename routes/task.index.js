var express = require('express');
var router = express.Router();

var TaskRepository = require('../repository/task.repository');
var Task=require('../models/task');

router.get('/all', function (req, res, next) {
    Task.findAll().then(function (result) {
        console.log(result);
        res.send(result);
    });
});

router.all('/new', function (req, res, next) {
    //タスクの新規追加
    //モック
    var param={
        header:'Hoge'+new Date().toTimeString()
    };
    TaskRepository.create(param);
    res.send('done!!');
});

router.post('/done', function (req, res, next) {
    //削除
});


module.exports = router;