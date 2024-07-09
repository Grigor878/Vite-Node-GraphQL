const { GraphQLString } = require("graphql");

const UserType = require("../typeDefs/user");

const CREATE_USER = {
    type: UserType,
    args: {
        name: { type: GraphQLString },
        username: { type: GraphQLString },
        password: { type: GraphQLString }
    },
    async resolve(parent, args, context) {
        const { name, username, password } = args;
        const db = context.db;

        const [result] = await db.execute(
            'INSERT INTO users (name, username, password) VALUES (?, ?, ?)',
            [name, username, password]
        );

        return { id: result.insertId, name, username, password };
    }
}
module.exports = CREATE_USER;
