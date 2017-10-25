const express = require('express');
const ejs = require('ejs');

var app = express();
var PORT = process.env.PORT || 3000;

// use public/ dir
app.use(express.static(__dirname + '/public'));

// use views dir
app.set('views', __dirname + '/views');

// render raw html
app.engine('html', ejs.renderFile);

app.get('/', function(req, res) {
  res.render('index.html');
});


// minecraft digital circuits
app.get('/minecraft', function(req, res) {
  res.render('minecraft.html');
});

app.listen(PORT, function() {
  console.log('listening on port ' + PORT);
});
