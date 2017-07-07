var express = require('express');
var router = express.Router();
var user = require('../models/User.js');
var passport = require ('passport');

//SIGNUP
router.post('/signup', function (req, res) {
	var newUser = new user({ username: req.body.username, email: req.body.email });
	user.register(newUser, req.body.password, function (err, user) {
		if (err) {
			return res.send({error:"hubo un error durante el registro"});
		}
		res.send({"Se creó el usuario":user.username});
	});
});

//SIGNIN
router.post('/signin', passport.authenticate('local'), function(req, res) {
	console.log('user',req.user)
	if(req.isAuthenticated()) {
		return res.send({
			err: null,
			user: req.user.username,
			favorites: req.user.favorites,
			succes: true
		});
	}
	return res.send({
		err: 'algo salio mal',
		user: null,
		succes: false
	})

});

//SIGNOUT
router.get('/signout', function(req, res){
	req.logout();
	res.send({bien:"Deslogeado"});
});

//AUTH Middleware
function isLoggedIn(req, res, next) {
	if (req.isAuthenticated()) {
		return next();
	}
	return res.send({nope:"unauthorized"});
}

//FAVORITES
router.get('/favorites', isLoggedIn, function(req, res) {
	res.json({favorites : user.favorites});
});

module.exports = router;
