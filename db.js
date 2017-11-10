const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack');
const Page = require('./models/Page.js');
const User = require('./models/User.js');

db.sync()
  .then(function() {
    console.log('db is working??')
  })

module.exports = db;