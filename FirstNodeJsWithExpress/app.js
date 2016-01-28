/**
 * Module dependencies.
 */

var express = require('express'),
             routes = require('./routes'), 
             user = require('./routes/user'),
             http = require('http'), 
             bodyParser = require('body-parser'),
             morgan = require('morgan'),
             methodOverride = require('method-override'),
             errorHandler = require('errorhandler'),
             path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
	extended : true
}));
app.use(methodOverride());
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
	app.use(errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function() {
	console.log('Express server listening on port ' + app.get('port'));
});


