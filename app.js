const express = require( 'express' );
const nunjucks = require('nunjucks');
const app = express();

app.use('/', function(req, res, next) {
  console.log(req.method, req.originalUrl)
  next();
})

var locals = {title: 'An Example',
people: [
    { name: 'Gandalf'},
    { name: 'Frodo' },
    { name: 'Hermione'}
]
};

app.get('/', function(req, res) {
  res.render('index', locals);
})

app.listen(3000, function() {
  console.log('server listening');
})


nunjucks.configure('views', {noCache: true});
// nunjucks.render('index.html', locals, function (err, output) {
// console.log(output);
// });

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
// point nunjucks to the proper directory for templates
