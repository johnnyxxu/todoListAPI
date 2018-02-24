'use strict';
var mongoose = require('mongoose');
var async = require('async');
var Task = mongoose.model('Task');
var User = mongoose.model('User');

exports.list_all_users = function(req, res) {
  debugger
  User.find({}, function(err, user) {
    if (err) {
      res.send(err);
    } else {
      res.json(user);
    }
  });
};

exports.create_a_user = function(req, res) {
  var new_user = new User(req.body);
  new_user.save(function(err, user) {
    if (err) {
      res.send(err);
    } else {
      res.json(user);
    }
  });
};

exports.list_all_tasks = function(req, res) {
  Task.find({}, function(err, task) {
    if (err) {
      res.send(err);
    } else {
      res.json(task);
    }
  });
};

exports.create_a_task = function(req, res) {
  var new_task = new Task(req.body);
  new_task.save(function(err, task) {
    if (err) {
      res.send(err);
    } else {
      res.json(task);
    }
  });
};

exports.get_a_task = function(req, res) {
  Task.findById(req.params.taskId, function(err, task) {
    if (err) {
      res.send(err);
    } else {
      res.json(task);
    }
  });
};

exports.get_current_time = function(req, res) {
  res.json(new Date());
};

exports.update_a_task = function (req, res) {
  Task.findOneAndUpdate(
    {_id: req.params.taskId},
    req.body,
    {new: true},
    function(err, res) {
      if (err) {
        res.send(err);
      } else {
        res.json(task);
      }
    }
  );
};

exports.delete_a_task = function(req, res) {
  Task.remove({_id: req.params.taskId}, function(err, res) {
    if (err) {
      res.send(err);
    } else {
      res.json({message : 'Task successfully deleted'});
    }
  });
};
