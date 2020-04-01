const jwt = require('jsonwebtoken');
const { getOneUserByEmail } = require('../services/UserService');

const verifyToken = async request => {
	try {
		const Authorization = request.get('Authorization');
		if(Authorization) {
			// JWT header.payload.signature
			const formatedToken =  Authorization.replace('JWT ', '');
			const payload = jwt.verify(formatedToken, process.env.SECRET_KEY_JWT);
			if(!payload) return request;
			const userAuth = await getOneUserByEmail(payload.email);
			if(!userAuth) return request;
			return userAuth;
		} else {
			return {};
		}
	} catch (error) {
		throw new Error(error.message);
	}
};

module.exports = verifyToken;