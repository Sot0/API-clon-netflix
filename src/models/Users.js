const mongoose = require('mongoose');

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
	comments: {
		type: [Schema.Types.ObjectId],
		ref:'comments'
	},
	is_active: {
		type: Boolean,
		required: true,
		default: true
	}
}, {timestamps: true});

module.exports = mongoose.model('users', UserSchema);