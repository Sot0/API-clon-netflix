const Users = require('../models/Users');

const getAllUsers = () => Users.find({ is_active: true });

const getOneUser = id => Users.findById({ _id: id, is_active: true });

const createOneUser = data => Users.create(data);

const updateUserById = (id, data) => Users.findByIdAndUpdate({
	_id: id,
	is_active: true
}, { ...data }, { new: true });

const deleteUserById = (id) => Users.findByIdAndUpdate({_id: id, is_active: true}, { is_active:false }, { new: true });

module.exports = {
	getAllUsers,
	getOneUser,
	createOneUser,
	updateUserById,
	deleteUserById
};