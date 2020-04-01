const { getAllMovies, getOneMovieById } = require('../../services/MovieService');

const getMovies = async () => {
	const movie = await getAllMovies();
	return movie;
};

const getMovieById = async (_, {id}) => {
	const movie = await getOneMovieById(id);
	return movie;
};

module.exports = {
	getMovies,
	getMovieById
};