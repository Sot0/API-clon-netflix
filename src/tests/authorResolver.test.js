const { graphql } = require('graphql');
const { schema } = require('../../index');

const { createOneUser } = require('../services/UserService');

const setUpTest = require('./helpers');

const MUTATION_CREATE_USER = `
    mutation createUser($data: UserCreateInput!) {
        createUser(data: $data) {
        _id
        first_name
        last_name
        password
        }
    }
`;

// describe() marcar un grupo de tests enfocados a una sola funcionalidad
// it ó test

// eslint-disable-next-line no-undef
describe('Test Create User Mutation', () => {
	// antes de iniciar
	// eslint-disable-next-line no-undef
	beforeEach( async () => await setUpTest());
	// eslint-disable-next-line no-undef
	it('Should Create User', (done) => {
		const makeTest = async () => {
			const data = {
				first_name: 'test',
				last_name: 'test',
				email: 'hugosoto860@hotmail.com',
				password: 'password',
				birth_date: '13-01-1998',
				gender: 'M',
			};

			graphql(schema, MUTATION_CREATE_USER, null, {}, { data })
				.then(res => {
					console.log(res);
					
					// eslint-disable-next-line no-undef
					expect(res.data.createOneUser).toHaveProperty('_id');
					// eslint-disable-next-line no-undef
					expect(res.data.createOneUser).toHaveProperty('email', data.email);
					done();
				});
		};
		makeTest();
	});

	// eslint-disable-next-line no-undef
	it('Should Not Create User', (done) => {
		const makeTest = async () => {
			const data = {
				first_name: 'test',
				last_name: 'test',
				email: 'hugosoto860@hotmail.com',
				password: 'password',
				birth_date: '13-01-1998',
				gender: 'M',
			};

			await createOneUser(data);
			graphql(schema, MUTATION_CREATE_USER, null, {}, { data })
				.then(res => {
					// eslint-disable-next-line no-undef
					expect(res).toHaveProperty('errors');
					done();
				});
		};
		makeTest();
	});
});