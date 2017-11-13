const express = require('express');
const router = express.Router();
const page = require('../models/index.js').Page;

router.get('/', function(req, res) {
  //sendall
  page.findAll()
  .then(function(msg) {
    res.render('index.html', {msg})
  })
  .catch(function(err) {
    if(err) throw err;
  })
});

router.get('/add', function(req, res) {

  res.render('addpage')
})

router.get('/:route', function(req, res) {
  page.findOne({urlTitle: req.params.route})
  .then(function(msg) {
    res.render('wikipage', {msg});
  })
});

router.post('/', function(req, res) {
  let newPage = {
  	title: req.body.title,
    urlTitle: '',
  	content: req.body.content
  }
  page.create(newPage)
  .then(function(msg) {
    res.redirect(msg.route)
  })
  .catch(function(err) {
    if(err) throw err;
  })
});


// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
// }

// function beforeValidation(title) {
//   let url = '';
//   if(title.length > 1) {
//     url = title.replace(/[^a-zA-Z0-9]/g,'-').toLowerCase()
//   } else {
//     for(let i = 0; i < 10; i++) {
//       let rand = getRandomInt(97, 122)
//       url += String.fromCharCode(rand)
//     }
//   }
//   return url;
// }

module.exports = router;
