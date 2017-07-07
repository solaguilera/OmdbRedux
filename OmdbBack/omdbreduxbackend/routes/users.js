var express = require('express');
var router = express.Router();
var user = require('../models/User.js');
var passport = require ('passport');

//req.isAuthenticated(); // true o false
//req.user;

//Persistencia
router.get('/'), function (req, res) {
	if(req.isAuthenticated()){
		return res.send({
			err: null,
			user: req.user.username,
			favorites: req.user.favorites,
			success: true
		});
	}
};

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
			success: true
		});
	}
	return res.send({
		err: 'algo salio mal',
		user: null,
		success: false
	})

});

//SIGNOUT
router.post('/signout', function(req, res){
	// hay que borrar la cookie
	req.logout();
	req.session.destroy(function (err) {
		if(err) return res.send(err);
		return res.send({
			success:true,
		});
    });
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
	res.json({
		favorites : user.favorites,
	});
});

module.exports = router;
