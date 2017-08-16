const express = require('express');
const mustacheExpress = require('mustache-express');

const data = require('./data.js');
const app = express();

app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.use(express.static('public'));

app.get('/', function(req,res) {
    res.render('index.mustache', { users: data.users})
});

// creating localhost
app.listen(3000, function () {
    console.log('success!');
});