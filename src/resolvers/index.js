const UserResolver = require('./UserResolvers');

module.exports = {
	Query: {
		...UserResolver.Query
	},
	Mutation: {
		...UserResolver.Mutation
	}
};