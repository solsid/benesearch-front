"use strict";
const express = require('express'),
      app = express(),
      morgan = require('morgan'),
      path = require('path'),
      portNumber = process.env.PORT || process.argv[2] || 8080;

app.use(express.static(__dirname));
app.use(morgan('dev'));

app.get('/', function (req, res) {
  console.log(__dirname);
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(portNumber, function () {
  console.log("Listening on port " + portNumber);
});