const { getAllUsers, getOneUser } = require('../../services/UserService');

const getUsers = async () => {
	const users = await getAllUsers();
	return users;
};

const getUserById = async (_, {id}) => {
	const user = await getOneUser(id);
	return user;
};

module.exports = {
	getUsers,
	getUserById
};