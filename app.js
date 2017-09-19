const express = require( 'express' );
const nunjucks = require('nunjucks');
const routes = require('./routes');
const app = express();
app.use('/', routes);

app.use('/', function(req, res, next) {
  console.log(req.method, req.originalUrl)
  next();
})

app.listen(3000, function() {
  console.log('server listening');
})

nunjucks.configure('views', {noCache: true});

app.set('view engine', 'html');
app.engine('html', nunjucks.render);

app.use(express.static('./public'));