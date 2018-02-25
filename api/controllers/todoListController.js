'use strict';
var mongoose = require('mongoose');
var async = require('async');
var Task = mongoose.model('Task');
var User = mongoose.model('User');


exports.get_current_time = function(req, res) {
  res.json(new Date());
};

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

exports.get_a_user = function(req, res) {
  User.findById(req.params.userId, function(err, user) {
    if (err) {
      res.send(err);
    } else {
      res.json(user);
    }
  });
};

exports.update_a_user = function (req, res) {
  User.findByIdAndUpdate(
    {_id: req.params.userId},
    req.body,
    {new: true},
    function(err, user) {
      if (err) {
        res.send(err);
      } else {
        res.json(user);
      }
    }
  );
};

exports.delete_a_user = function(req, res) {
  User.findByIdAndRemove(req.params.userId, function (err, user) {
      console.log("the error is : " + err);
      if (err) {
        return res.status(500).send("There was a problem deleting the user.");
      }
      console.log('User successfully deleted');
      res.status(200).send('User ' + user.first_name + ' ' + user.last_name + ' is successfully deleted');
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

exports.update_a_task = function (req, res) {
  Task.findByIdAndUpdate(
    {_id: req.params.taskId},
    req.body,
    {new: true},
    function(err, task) {
      if (err) {
        res.send(err);
      } else {
        res.json(task);
      }
    }
  );
};

exports.delete_a_task = function(req, res) {
  Task.findByIdAndRemove(req.params.taskId, function (err, task) {
      console.log("the error is : " + err);
      if (err) {
        return res.status(500).send("There was a problem deleting the user.");
      }
      console.log('Task successfully deleted');
      res.status(200).send('Task ' + task.name + ' is successfully deleted');
  });
};
