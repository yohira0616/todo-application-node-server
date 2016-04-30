var express = require('express');
var router = express.Router();

var TaskRepository = require('../repository/task.repository');
var Task = require('../models/task');

function corsEnable(res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
}

router.get('/all', function (req, res, next) {
  corsEnable(res);

  Task.findAll().then(function (result) {
    console.log(result);
    res.send(result);
  });
});

router.all('/new', function (req, res, next) {
  corsEnable(res);
  var param = req.body;
  Task.create(param).then(function () {
    res.send('done');
  });
});

router.all('/done', function (req, res, next) {
  corsEnable(res);
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