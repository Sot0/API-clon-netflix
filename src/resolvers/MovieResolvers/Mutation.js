const { createOneMovie, updateMovieById, deleteMovieById } = require('../../services/MovieService');
const { getOneMovie } = require('../../services/MovieService');

const createMovie = async (_, {data}) => {
	const movie = await createOneMovie(data);
	return movie;
};

const createCommentonByMovieId = async (_, {id, data}) => {
	const movie = await getOneMovie(id);
	if(movie) {
		movie.comments.push(data);
		movie.save();
	}
	return movie;
};

const updateMovie = async (_, {id, data}) => {
	const movie = await updateMovieById(id, data);
	return movie;
};

const deleteMovie = async (_, {id}) => {
	const movie = await deleteMovieById(id);
	if (!movie) return 'Movie does not exists';
	return 'Movie deleted';
};

module.exports = {
	createMovie,
	createCommentonByMovieId,
	updateMovie,
	deleteMovie
};