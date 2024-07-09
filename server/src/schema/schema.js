const { GraphQLObjectType, GraphQLSchema } = require('graphql');

const { GET_ALL_USERS, GET_USER_BY_ID } = require('./queries/user');
const { CREATE_USER, DELETE_USER, UPDATE_PASSWORD } = require('./mutations/user');

const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: {
        getAllUsers: GET_ALL_USERS,
        getUserById: GET_USER_BY_ID,
    }
})

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        createUser: CREATE_USER,
        deleteUser: DELETE_USER,
        updatePassword: UPDATE_PASSWORD,
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
})