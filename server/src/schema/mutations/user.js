const { GraphQLString } = require("graphql");
const { getRepository } = require("typeorm");

const UserType = require("../typeDefs/user");
const Users = require("../../entities/users");

const CREATE_USER = {
    type: UserType,
    args: {
        name: { type: GraphQLString },
        username: { type: GraphQLString },
        password: { type: GraphQLString }
    },
    async resolve(parent, args) {
        const { name, username, password } = args;
        
        const userRepository = getRepository(Users);

        const newUser = userRepository.create({ name, username, password });

        await userRepository.save(newUser);

        return newUser;
    }
};

module.exports = CREATE_USER;

