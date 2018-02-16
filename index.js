const express = require('express');
const router = require('./routes/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost/killiMu');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

app.use('/api', router);

app.use(function(err, req, res, next){
  res.send({error:err.message});
});

app.get('/api', function(req, res){
   res.send({name: "yoshi"});
});

app.listen(process.env.port || 4000, function(){
  console.log('Now listening on port 4000');
});
