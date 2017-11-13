const express = require('express');
const router = express.Router();
const user = require('../models/index.js').User;

router.get('/users', function(req, res) {
  res.send('Users!');
});

module.exports = router;
