var mongoose = require( 'mongoose');
var passportLocalMongoose = ('passport-local-mongoose');
var Schema = mongoose.Schema;

class User extends mongoose.Schema {
	constructor() {
		super ({
			username: String,
			password: String,
			email: String,
			favorites: [String]
		})
	}
}

User.plugin(passportLocalMongoose);
const user = mongoose.model('User', new User);
module.exports = user;
