const express = require('express');
const app = express();


const keys =
  {
    key: 123,
  }
  

app.get('/', function(req, res) {
  res.send(keys);
});

module.exports = app;