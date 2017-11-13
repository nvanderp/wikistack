const express = require('express');
const router = express.Router();
const page = require('../models/index.js').Page;

router.get('/pages', function(req, res) {
  res.send('Pages!');
});

router.get('/pages/:route', function(req, res) {
  var returnedPage = page.findOne({urlTitle: req.params.route});
  res.send(returnedPage);
});

router.post('/pages', function(req, res) {
  console.log('here now');
});

module.exports = router;
