const UserResolver = require('./UserResolvers');
const MovieResolver = require('./MovieResolvers');
const { EmailAddressResolver, URLResolver } = require('graphql-scalars');

module.exports = {
	EmailAdd: EmailAddressResolver,
	URL: URLResolver,
	Query: {
		...UserResolver.Query,
		...MovieResolver.Query
	},
	Mutation: {
		...UserResolver.Mutation,
		...MovieResolver.Mutation
	}
};