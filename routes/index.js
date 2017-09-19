const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});

router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  let tweetList = tweetBank.list();
  var list = tweetBank.find( {name: name} );
  res.render( 'index', {tweetList: list});
});

router.get('/tweets/:id', function(req, res) {
  var id = req.params.id;
  let tweetList = tweetBank.list();
  var list = tweetBank.find( {id: id} );
  res.render( 'index', {tweetList: list});
});

module.exports = router;