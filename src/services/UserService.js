const Users = require('../models/Users');

const getAllUsers = () => Users.find({ is_active: true }).populate({
	path: 'favorites',
	model: 'movies',
});

const getOneUserById = id => Users.findById({ _id: id, is_active: true }).populate({
	path: 'favorites',
	model: 'movies',
});

const getOneUserByEmail = email => Users.findOne({ email: email, is_active: true }).populate({
	path: 'favorites',
	model: 'movies',
});

const createOneUser = data => Users.create(data);

const updateUserById = (id, data) => Users.findByIdAndUpdate({
	_id: id,
	is_active: true
}, { ...data }, { new: true }).populate({
	path: 'favorites',
	model: 'movies',
});

const deleteUserById = (id) => Users.findByIdAndUpdate({_id: id, is_active: true}, { is_active:false }, { new: true });

module.exports = {
	getAllUsers,
	getOneUserById,
	getOneUserByEmail,
	createOneUser,
	updateUserById,
	deleteUserById
};