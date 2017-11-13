const express = require('express');
const router = express.Router();
// const db = require('../db.js');

router.get('/', function(req, res) {
  res.redirect('/pages')
});

module.exports = router;
