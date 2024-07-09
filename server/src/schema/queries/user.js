const { GraphQLList } = require("graphql");

const UserType = require("../typeDefs/user");

const GET_ALL_USERS = {
    type: new GraphQLList(UserType),
    async resolve(parent, args, context) {
        const db = context.db;
        const [rows] = await db.execute('SELECT * FROM users');
        return rows;
    }
}
module.exports = GET_ALL_USERS;
