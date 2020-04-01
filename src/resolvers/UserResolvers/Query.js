const { getAllUsers, getOneUserById } = require('../../services/UserService');

const getUsers = async () => {
	const users = await getAllUsers();
	return users;
};

const getUserById = async (_, {id}) => {
	const user = await getOneUserById(id);
	return user;
};

module.exports = {
	getUsers,
	getUserById
};