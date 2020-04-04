const { createOneUser, updateUserById, deleteUserById } = require('../../services/UserService');
const { getOneMovieById } = require('../../services/MovieService');
const storage = require('../../utils/storage');
const authenticate = require('../../utils/authenticate');

const createUser = async (_, {data}) => {
	// save pincture on cloudinary
	if(data.profile_pic) {
		const { createReadStream } = await data.profile_pic;
		const stream = createReadStream();
		const storageInfo = await storage({stream});
		data = {
			...data,
			profile_pic: storageInfo.url
		};
	}

	const user = await createOneUser(data);
	return user;
};

const updateUser = async (_, {data}, { userAuth }) => {
	if(data.profile_pic) {
		const { createReadStream } = await data.profile_pic;
		const stream = createReadStream();
		const storageInfo = await storage({stream});
		data = {
			...data,
			profile_pic: storageInfo.url
		};
	}
	const user = await updateUserById(userAuth._id, data);
	return user;
};

const deleteUser = async (_, __, { userAuth }) => {
	const user = await deleteUserById(userAuth._id);
	if (!user) return 'User does not exist';
	return 'User deleted';
};

const login = async (_, params) => {
	const token = authenticate(params)
		.catch(error => { throw error;});
	return {
		token,
		message: 'Login Sucessful'
	};
};

const updateFavoriteMovie = async (_, {id, operation}, {userAuth}) => {
	const movie = await getOneMovieById(id);
	if (!movie) return 'Movie does not exists';
	if (operation) {
		userAuth.favorites.push(id);
		userAuth.save();
		return 'Movie add to favorites';
	} else if (!operation) {
		const index = userAuth.favorites.findIndex(movie => movie._id == id);
		userAuth.favorites.splice(index,1);
		userAuth.save();
		return 'Movie deleted';
	}
};

module.exports = {
	createUser,
	updateUser,
	deleteUser,
	login,
	updateFavoriteMovie
};