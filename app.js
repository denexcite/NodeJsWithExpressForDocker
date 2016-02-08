var express = require('express'),
             http = require('http'), 
             bodyParser = require('body-parser'),
             morgan = require('morgan'),
             methodOverride = require('method-override'),
             errorHandler = require('errorhandler'),
             path = require('path');

var app = express();
  
// all environments
 //views and "view engine" are required for jade
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

//app.use sets the middleware
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
	extended : true
}));
app.use(methodOverride());
app.use(express.static(path.join(__dirname, 'public')));

//this is the main use which sets the routes directory. routes/index.js is the main routes file which
//loads routes from other files in that directory
app.use(require('./routes'));

app.listen(3000, function() {
  console.log('Listening on port 3000...');
});