const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Killi = require('../models/killi');

router.get('/ninjas', function(req, res){
  res.send({name:'Get'});
});

router.post('/ninjas', function(req, res, next){
  Killi.create(req.body).then(function(killi){
    console.log(req.body);
    res.send(killi); //end of send
  }).catch(next);

}); //end of post

router.put('/ninjas/:id', function(req, res){
  res.send({name:'put'});
});

router.delete('/ninjas/:id', function(req, res){
  res.send({name:'delete'});
});

module.exports = router;
