const { GraphQLString, GraphQLID } = require("graphql");
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

const DELETE_USER = {
    type: UserType,
    args: {
        id: { type: GraphQLID }
    },
    async resolve(parent, args) {
        const { id } = args;

        const userRepository = getRepository(Users);

        const user = await userRepository.find({ where: { id } });

        if (!user) {
            throw new Error(`User with id ${id} not found.`);
        }

        await userRepository.remove(user);

        return user;
    }
};

const UPDATE_PASSWORD = {
    type: UserType,
    args: {
        username: { type: GraphQLString },
        oldPassword: { type: GraphQLString },
        newPassword: { type: GraphQLString }
    },
    async resolve(parent, args) {
        const { username, oldPassword, newPassword } = args;

        const userRepository = getRepository(Users);

        const user = await userRepository.findOne({ where: { username } });

        if (!user) {
            throw new Error("Username does not exist");
        }

        if (oldPassword !== user.password) {
            throw new Error("Incorrect old password");
        }

        user.password = newPassword;
        await userRepository.save(user);

        return user;
    }
}

module.exports = { CREATE_USER, DELETE_USER, UPDATE_PASSWORD };

