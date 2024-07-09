const { GraphQLList, GraphQLID } = require("graphql")
const { getRepository } = require("typeorm");

const UserType = require("../typeDefs/user");
const Users = require("../../entities/users");

const GET_ALL_USERS = {
    type: new GraphQLList(UserType),
    async resolve() {
        const userRepository = getRepository(Users);

        let users = [];

        try {
            users = await userRepository.find();
        } catch (error) {
            console.error("Error fetching users:", error);
        }

        return users;
    }
}

const GET_USER_BY_ID = {
    type: UserType,
    args: {
        id: { type: GraphQLID }
    },
    async resolve(parent, args) {
        const { id } = args;

        const userRepository = getRepository(Users);

        try {
            const user = await userRepository.findOne({ where: parseInt(id) });

            return user;
        } catch (error) {
            console.error(`Error fetching user with ID ${args.id}:`, error);
            return null; // or handle error as per your application's needs
        }
    }
};

module.exports = { GET_ALL_USERS, GET_USER_BY_ID };
