const express = require('express');
var path = require('path');

const app = express();

app.get('/', function(req,res){
  res.sendFile(path.join(__dirname + '/home.html'));
})

app.listen(8080,function(req, res){
  console.log('server running');
})