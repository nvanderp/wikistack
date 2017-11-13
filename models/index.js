const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack', {
  logging: false
});

const Page = db.define('page', {
    title: {
      type: Sequelize.STRING,
      allowNull: false
    },
    urlTitle: {
      type: Sequelize.STRING,
      allowNull: false
    },
    content: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    status: {
      type: Sequelize.BOOLEAN, // true = open; false = closed
      defaultValue: true
    },
    date: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    },
    route: {
      type: Sequelize.STRING,
    }
}, {
  hooks: {
    beforeValidate: function(page) {
      let url = '';
      if(page.title.length > 1) {
        url = page.title.replace(/[^a-zA-Z0-9]/g,'-').toLowerCase()
      } else {
        for(let i = 0; i < 10; i++) {
          let rand = getRandomInt(97, 122)
          url += String.fromCharCode(rand)
        }
      }
      page.urlTitle = url;
    },
    afterValidate: function(page) {
      page.setDataValue('route', '/pages/' + page.urlTitle);
    }
  }
});

const User = db.define('user', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          isEmail: true
        }
    }
});

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

module.exports = {
  Page: Page,
  User: User,
  db: db
};
