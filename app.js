const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');

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

app.listen(1337, function() {
  console.log('Listening on 1337');
});



