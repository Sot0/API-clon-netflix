const { createOneMovie, updateMovieById, deleteMovieById } = require('../../services/MovieService');
const { getOneMovie } = require('../../services/MovieService');
const storage = require('../../utils/storage');

const createMovie = async (_, {data}) => {
	// data.cover && data.video
	const { createReadStream } = await data.cover;
	const stream = createReadStream();
	const storageInfo = await storage({stream});
	data = {
		...data,
		cover: storageInfo.url,
		video: storageInfo.url
	};

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
	const { createReadStream } = await data.cover;
	const stream = createReadStream();
	const storageInfo = await storage({stream});
	data = {
		...data,
		cover: storageInfo.url,
		video: storageInfo.url
	};
	const movie = await updateMovieById(id, data);
	return movie;
};

const deleteMovie = async (_, {id}, {userAuth}) => {
	const movie = await deleteMovieById(id);
	if (!movie) return 'Movie does not exists';
	const index = userAuth.favorites.findIndex(movie => movie._id == id);
	userAuth.favorites.splice(index,1);
	userAuth.save();
	return 'Movie deleted';
};

module.exports = {
	createMovie,
	createCommentonByMovieId,
	updateMovie,
	deleteMovie
};