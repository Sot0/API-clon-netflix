const UserResolver = require('./UserResolvers');
const MovieResolver = require('./MovieResolvers');

module.exports = {
	Query: {
		...UserResolver.Query,
		...MovieResolver.Query
	},
	Mutation: {
		...UserResolver.Mutation,
		...MovieResolver.Mutation
	}
};