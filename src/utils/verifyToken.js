const jwt = require('jsonwebtoken');
const { getUserByEmail } = require('../services/UserService');

const verifytoken = async request => {
	try {
		const Authorization = request.get('Authorization');
		if(Authorization) {
			// JWT header.payload.signature
			const formattedToken =  Authorization.replace('JWT ', '');
			const payload = jwt.verify(formattedToken, process.env.SECRET_KEY_JWT);
			if(!payload) return request;
			const userAuth = await getUserByEmail(payload.email);
			if(!userAuth) return request;
			return userAuth;
		} else {
			return {};
		}
	} catch (error) {
		throw new Error(error.message);
	}
};

module.exports = verifytoken;