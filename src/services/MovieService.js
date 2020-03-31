const Movie = require('../models/Movies');

const getAllMovies = () => Movie.find({ is_active: true }).populate({
	path: 'comments.user',
	model: 'users'
});

const getOneMovie = id => Movie.findById({ _id: id, is_active: true }).populate({
	path: 'comments.user',
	model: 'users'
});

const createOneMovie = (data) => Movie.create(data);

const updateMovieById = (id, data) => Movie.findByIdAndUpdate({
	_id: id,
	is_active: true
}, { ...data }, { new: true }).populate({
	path: 'comments.user',
	model: 'users'
});

const deleteMovieById = (id) => Movie.findByIdAndUpdate({ _id: id, is_active: true }, { is_active: false }, { new: true });

module.exports= {
	getAllMovies,
	getOneMovie,
	createOneMovie,
	updateMovieById,
	deleteMovieById
};