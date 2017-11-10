const db = require('../db.js');
const Sequelize = require('sequelize');

const Page = db.define('page', {
    title: {
        type: db.STRING
    },
    urlTitle: {
        type: db.STRING
    },
    content: {
        type: db.TEXT
    },
    status: {
        type: db.ENUM('open', 'closed')
    }
});

module.exports = Page;