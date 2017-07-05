var path = require( 'path');
var logger = require( 'morgan');
var cookieParser = require( 'cookie-parser');
var express = require( 'express');
var passport = require( 'passport');
var LocalStrategy = require( 'passport-local');
var mongoose = require( 'mongoose');
var expressSession = require( 'express-session');
var User = require( './models/User');
var bodyParser = require( 'body-parser');

var index = require( './routes/index');
var users = require( './routes/users');

const app = express();

mongoose.connect('mongodb://localhost/autenticacion');
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
app.use(express.static(path.join(__dirname, 'public')));

// app.use(express.session());

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use('/', index);
app.use('/users', users);

app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});


const urlParser = bodyParser.urlencoded({ extended:true });

app.get('/login', function(req, res) {
	res.render('login');
});

app.post('/login', urlParser, passport.authenticate('local', {
	failureRedirect: '/register',
}), function(req, res) {
	// console.log('logeado');
	res.send('Estas Logeado');
});

app.get('/register', function (req, res) {
	res.render('register');
});

// Procesa el registro,
app.post('/register', urlParser, function (req, res) {
	// console.log(req.body);
	var newUser = new User({ username: req.body.username });
	User.register(newUser, req.body.password, function (err, user) {
		if (err) {
			// console.log(err);
			return res.send('hubo un error durante el registro');
		}
		res.send('Se creó el usuario ' + user.username);
	});
});

// Logout

app.get('/logout', function(req, res){
	req.logout();
	res.send('Deslogeado');
});

// Middleware
// Si está autenticado, que siga, si no respondemos que no puede pasar.
// Usamos la función req.isAuthenticated() de Passport.
function isLoggedIn(req, res, next) {
	if (req.isAuthenticated()) {
		return next(); // puede pasar
	}
	return res.send('<img src="https://i.ytimg.com/vi/qdYifXP5tVA/maxresdefault.jpg"/>');
}

// Publica
app.get('/publica', function(req, res) {
	res.render('publica');
});

// Privada
// Usamos el middleware que creamos arriba
app.get('/privada', isLoggedIn, function(req, res) {
	res.render('privada');
});

app.use(function(err, req, res) {
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	res.status(err.status || 500);
	res.render('error');
});

app.listen(8080);
module.exports= app;
