const { GraphQLList } = require("graphql")
const { getConnection } = require('typeorm');

const UserType = require("../typeDefs/user");

const GET_ALL_USERS = {
    type: new GraphQLList(UserType),
    async resolve() {
        const connection = getConnection();
        const queryRunner = connection.createQueryRunner();
        await queryRunner.connect();

        let users = [];
        
        try {
            users = await queryRunner.manager.find('users');
        } finally {
            await queryRunner.release();
        }

        return users;
    }
}

module.exports = GET_ALL_USERS;
