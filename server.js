'use strict';

var express = require('express');   //import app
var app = express();    //instance of app
var bodyparser = require('body-parser');    //
var port = process.env.PORT || 3000;
var Adjective = require('./lib/adjective.js');
var Noun = require('./lib/noun.js');
var Verb = require('./lib/verb.js');
var getRandomWord = require('./lib/getRandomWord.js');
var postWord = require('./lib/postWord.js');

var adjective = new Adjective();
var noun = new Noun();
var verb = new Verb();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
  extended: true
}));

app.use(express.static(__dirname + '/app/'));


app.get('/adjective', function(req, res) {
  res.json(getRandomWord(adjective));
});

app.get('/verb', function(req, res) {
  res.json(getRandomWord(verb));
});

app.get('/noun', function(req, res) {
  res.json(getRandomWord(noun));
});

app.post('/adjective', function(req, res) {
  var word = postWord(req.body.word, adjective);
  res.json(word);
});
app.post('/verb', function(req, res) {
  var word = postWord(req.body.word, verb);
  res.json(word);
});
app.post('/noun', function(req, res) {
  var word = postWord(req.body.word, noun);
  res.json(word);
});

app.get('/', function(req, res) {
  res.sendFile('index.html');
});

app.listen(port, function() {
  console.log('server starting. available at http://localhost:' + port);
});

// app.get('/', function(req, res) {
//   res.send('hello, universe');
// });
