// users routes 

const router = require('express').Router()
const User = require('../models/user')

module.exports = router

router.get('/', (req, res, next) => {
  User.find({}, function(err, user) {
    if (err) {
      res.send(err);
    } else {
      res.json(user);
    }
  });
});

router.get('/current-time', (req, res, next) => {
  res.json(new Date());
});

router.post('/', (req, res, next) => {
  var new_user = new User(req.body);
  new_user.save(function(err, user) {
    if (err) {
      res.send(err);
    } else {
      res.json(user);
    }
  });
});

router.put('/:id', (req, res, next) => {
  User.findByIdAndUpdate(
    {_id: req.params.id},
    req.body,
    {new: true},
    function(err, user) {
      if (err) {
        res.send(err);
      } else {
        if (user) {
            res.json(user);
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
  User.findById(req.params.id, function(err, user) {
    if (err) {
      res.send(err);
    } else {
      if (user) {
          res.json(user);
      } else {
        res.status(404).json({
          message: 'resource not found'
        })
      }
    }
  });
});

router.delete('/:id', (req, res, next) => {
  User.findByIdAndRemove(req.params.id, function (err, user) {
      if (err) {
        return res.status(500).send("There was a problem deleting the user.");
      }
      console.log('User successfully deleted');
      res.status(200).json({
          message : 'User ' + user.first_name + ' ' + user.last_name + ' is successfully deleted'
      });
  });
});
