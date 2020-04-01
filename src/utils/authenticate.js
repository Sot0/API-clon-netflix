const bcrypt = require('bcrypt');
const { getOneUserByEmail } = require('../services/UserService');

const createToken = require('./createToken');

const authenticate = ( { email, password } ) => {
	return new Promise((resolve, reject) => {
		getOneUserByEmail(email).then( userAuth => {
			if(!userAuth) reject(new Error('Author not exists'));
			bcrypt.compare(password, userAuth.password, (error, isValid) => {
				if(error) reject(new Error('Error to compare'));
				isValid
					? resolve(createToken(userAuth))
					: reject(new Error('Incorrect Password'));
			});
		});
	});
};

module.exports = authenticate;