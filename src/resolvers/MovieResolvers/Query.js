const { getAllMovies, getOneMovie } = require('../../services/MovieService');

const getMovies = async () => {
	const movie = await getAllMovies();
	return movie;
};

const getMovieById = async (_, {id}) => {
	const movie = await getOneMovie(id);
	return movie;
};

module.exports = {
	getMovies,
	getMovieById
};