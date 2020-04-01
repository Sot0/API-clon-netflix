const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
	first_name: {
		type: String,
		required: true
	},
	last_name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	},
	birth_date: {
		type: String,
		required: true
	},
	gender: {
		type: String,
		enum: ['M', 'F'],
		required: true
	},
	profile_pic: String,
	favorites: {
		type: [Schema.Types.ObjectId],
		ref:'movies'
	},
	is_active: {
		type: Boolean,
		required: true,
		default: true
	}
}, {timestamps: true});

UserSchema.pre('save', function(next) {
	const user = this;
	const SALT_FACTOR = 10;
	if(!user.isModified('password')) return next();
	bcrypt.genSalt(SALT_FACTOR, function(error, salt) {
		if(error) return next(error);
		bcrypt.hash(user.password, salt, function(error, hash){
			if(error) return next(error);
			user.password = hash;
			next();
		});
	});
});

module.exports = mongoose.model('users', UserSchema);