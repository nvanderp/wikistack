const express = require('express');
const router = express.Router();
const user = require('../models/index.js').User;

router.get('/', function(req, res) {
  //sendall
  user.findAll()
  .then(function(msg) {
    res.send(msg)
  })
  .catch(function(err) {
    if(err) throw err;
  })
});

router.get('/add', function(req, res) {

  // res.render('addpage')
})

router.get('/:userId', function(req, res) {
  user.findOne({id: req.params.userId})
  .then(function(msg) {
    res.send(msg)
  })
  .catch(function(err) {
    if(err) throw err
  })
});

router.post('/new', function(req, res) {
  console.log('here now');
  console.log(req.body)
  let newUser = {
  	name: req.body.name,
    email: req.body.email
  }
  user.create(newUser)
  .then(function(msg) {
    res.send(msg)
  })
  .catch(function(err) {
    if(err) throw err;
  })
});

module.exports = router;
