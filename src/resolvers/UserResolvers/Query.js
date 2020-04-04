const { getAllUsers, getOneUserById } = require('../../services/UserService');

const getUsers = async () => {
	const users = await getAllUsers();
	return users;
};

const getUserById = async (_, {id}) => {
	const user = await getOneUserById(id);
	return user;
};

const me = async (_, __, {userAuth}) => {
	const author = await getOneUserById(userAuth._id);
	return author;
};

module.exports = {
	getUsers,
	getUserById,
	me
};