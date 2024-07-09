const { EntitySchema } = require('typeorm');

const Users = new EntitySchema({
    name: 'users',
    tableName: 'users',
    columns: {
        id: {
            type: 'int',
            primary: true,
            generated: true,
        },
        name: {
            type: 'varchar',
        },
        username: {
            type: 'varchar',
        },
        password: {
            type: 'varchar',
        },
    },
});

module.exports = Users;
