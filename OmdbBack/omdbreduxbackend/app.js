var path = require( 'path');
var logger = require( 'morgan');
var cookieParser = require( 'cookie-parser');
var express = require( 'express');
var passport = require( 'passport');
var LocalStrategy = require( 'passport-local');
var allowCrossOrigin = require('./views/allowCrossOrigin.js');

var mongoose = require( 'mongoose');
var expressSession = require( 'express-session');
var User = require( './models/User');
var bodyParser = require( 'body-parser');

var index = require( './routes/index');
var users = require( './routes/users');

const app = express();
app.use(function(req, res, next) {
	console.log(req.url);
	next();
});

mongoose.connect('mongodb://mongo/autenticacion');
app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(expressSession({
	secret: 'string secreta',
	resave: false,
	saveUninitialized: false,
}));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.session());

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use('/', index);
app.use('/users', users);

app.use(function(err, req, res) {
	res.send('err');
});

app.listen(8080);
module.exports= app;
