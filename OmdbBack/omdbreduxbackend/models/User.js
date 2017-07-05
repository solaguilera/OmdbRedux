var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');
var Schema = mongoose.Schema;

var User = new Schema ({
	username: String,
	password: String,
	email: String,
	favorites: [String],
});

User.plugin(passportLocalMongoose);

var user = mongoose.model('User', User);
module.exports=user;
