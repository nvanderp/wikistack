const express = require('express');
const router = express.Router();
const user = require('../models/index.js').User;
const page = require('../models/index.js').Page;
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

router.post('/', function(req, res) {
  console.log('before err')
  user.findOrCreate({
    where: {
      name: req.body.author,
      email: req.body.email
    }
  })
  .then(function(values) {
    // console.log(users)
    // var a = values[0]
    res.send(values)

    // let newPage = {
    // 	title: req.body.title,
    //   urlTitle: '',
    // 	content: req.body.content
    // }
    //
    // return page.create(newPage)

  })
  // .then(function(msg) {
  //   res.redirect(msg.route)
  // })
  .catch(function(err) {
    if(err) throw err;
  })

});

module.exports = router;
