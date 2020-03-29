const { createOneUser, updateUserById, deleteUserById } = require('../../services/UserService');

const createUser = async (_, {data}) => {
	const user = await createOneUser(data);
	return user;
};

const updateUser = async (_, {id, data}) => {
	const user = await updateUserById(id, data);
	return user;
};

const deleteUser = async (_, {id}) => {
	const user = await deleteUserById(id);
	return user;
};

module.exports = {
	createUser,
	updateUser,
	deleteUser
};