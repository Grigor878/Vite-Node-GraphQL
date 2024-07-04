const { GraphQLObjectType, GraphQLSchema } = require('graphql');
// const { GET_ALL_USERS } = require('./mutations/user');

const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: {
        // getAllUSers: GET_ALL_USERS
    }
})

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {}
})

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
})