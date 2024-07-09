const { GraphQLObjectType, GraphQLSchema } = require('graphql');

const GET_ALL_USERS = require('./queries/user');
const CREATE_USER = require('./mutations/user');

const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: {
        getAllUsers: GET_ALL_USERS
    }
})

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        createUser: CREATE_USER
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
})