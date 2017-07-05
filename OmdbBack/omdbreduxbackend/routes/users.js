var express = require('express');
var router = express.Router();
var user = require('../models/User.js');
var passport = require ('passport');

router.post('/signup', (req, res) => {
	user.create({
		username: req.body.signupUser,
		password: req.body.singupPassword,
		email: req.body.singupEmail,
	}, function (err, user) {
		console.log(err, user);
		res.send(err ? err : user);
	});
});

router.post('/signin', passport.authenticate('local', {
}), function (req, res) {res.send(req);
});

router.post('/logout', function (req, res) {
	req.logOut();
	res.send(200);
});

module.exports = router;
