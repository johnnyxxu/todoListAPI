'use strict'
const express = require('express');
const mongoose = require('mongoose');
const API_VERSION = '1.0';

var app = express(),
  port = process.env.PORT || 3000;
var bodyParser = require('body-parser');


// mongoose instance connection url connection
// mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb');
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  app.use('/api/' + API_VERSION, require('./api/routes/api'))

  app.use(function(req, res) {
    res.status(404).send({
      url: req.originalUrl + ' not found'
    })
  });

  app.listen(port);
  console.log('RESTful API server is listening on port :' + port);
});
