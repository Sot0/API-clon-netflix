module.exports = {
	getMongoUrl: () => {
		console.log(process.env.NODE_ENV);
		if (process.env.NODE_ENV === 'test') return process.env.MONGO_URL_TEST;
		if (process.env.NODE_ENV === 'production') return process.env.MONGO_URL_PRODUCTION;
		if (process.env.NODE_ENV === 'develop') return process.env.MONGO_URL_DEVELOP;
		else return process.env.MONGO_URL_DEVELOP;
	}
};