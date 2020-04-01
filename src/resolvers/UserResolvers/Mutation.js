const { createOneUser, updateUserById, deleteUserById } = require('../../services/UserService');
const authenticate = require('../../utils/authenticate');

const createUser = async (_, {data}) => {
	const user = await createOneUser(data);
	return user;
};

const updateUser = async (_, {data}, { userAuth }) => {
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

module.exports = {
	createUser,
	updateUser,
	deleteUser,
	login
};