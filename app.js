const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');
// OUR MODELS
const models = require('./models');
const pages = require('./routes/pages');
const users = require('./routes/users');


app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views');
nunjucks.configure('views', {
  noCache: true
});

app.use(express.static('public'));
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

var testRoutes = require('./routes/index.js');
app.use('/', testRoutes);
app.use('/pages', pages);
app.use('/users', users);

models.db.sync({force: true})
.then(function() {
  app.listen(3000, function() {
    console.log('Server is listening on port 3000!');
  });
})
.catch(console.error);
