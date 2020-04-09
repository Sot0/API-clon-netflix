const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MovieSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	created_by: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	video: {
		type: String,
		required: true
	},
	cover: {
		type: String,
		required: true
	},
	categories: {
		type: [String],
		required: true,
		enum: ['accion', 'anime', 'aventura', 'comedia', 'magia', 'mexicana', 'terror', 'romance', 'fantasia', 'guerra', 'animacion', 'suspenso']
	},
	comments: {
		type: [{
			user: {
				type: Schema.Types.ObjectId,
				ref:'users'
			},
			text: {
				type: String,
				required: true
			}
		}]
	},
	is_active: {
		type: Boolean,
		required: true,
		default: true
	}
}, {timestamps: true});

module.exports = mongoose.model('movies', MovieSchema);