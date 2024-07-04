const { UserType } = require('../typeDefs/user')
const { GraphQLList } = require("graphql")

const GET_ALL_USERS = {
    type: new GraphQLList(UserType),
    resolve() {
        return "Pedro"
    }
}
module.exports = GET_ALL_USERS;
