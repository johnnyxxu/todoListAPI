// tasks routes 

const router = require('express').Router()
const Task = require('../models/task')

module.exports = router

router.get('/', (req, res, next) => {
  Task.find({}, function(err, task) {
    if (err) {
      res.send(err);
    } else {
      res.json(task);
    }
  });
});

router.get('/current-time', (req, res, next) => {
  res.json(new Date());
});

router.post('/', (req, res, next) => {
  var new_task = new Task(req.body);
  new_task.save(function(err, task) {
    if (err) {
      res.send(err);
    } else {
      res.json(task);
    }
  });
});

router.put('/:id', (req, res, next) => {
  Task.findByIdAndUpdate(
    {_id: req.params.id},
    req.body,
    {new: true},
    function(err, task) {
      if (err) {
        res.send(err);
      } else {
        if (task) {
            res.json(task);
        } else {
          res.status(404).json({
            message: 'resource not found'
          })
        }
      }
    }
  );
});

router.get('/:id', (req, res, next) => {
  Task.findById(req.params.id, function(err, task) {
    if (err) {
      res.send(err);
    } else {
      if (task) {
          res.json(task);
      } else {
        res.status(404).json({
          message: 'resource not found'
        })
      }
    }
  });
});

router.delete('/:id', (req, res, next) => {
  Task.findByIdAndRemove(req.params.id, function (err, task) {
      if (err) {
        return res.status(500).send("There was a problem deleting the task.");
      }
      console.log('Task successfully deleted');
      res.status(200).json({
          message : 'Task ' + task.name + ' is successfully deleted'
      });
  });
});
