const express = require('express');
const ejs = require('ejs');

var app = express();
var PORT = process.env.PORT || 3000;

app.set('views', __dirname + '/views');
app.engine('html', ejs.renderFile);

app.get('/', function(req, res) {
  res.render('index.html');
});

app.listen(PORT, function() {
  console.log('listening on port ' + PORT);
});
