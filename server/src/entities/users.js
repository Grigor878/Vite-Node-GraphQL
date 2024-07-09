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

// const { BaseEntity, Column, Entity, PrimaryGeneratedColumn } = require("typeorm");

// @Entity()
// class Users extends BaseEntity {
//     @PrimaryGeneratedColumn()
//     id;

//     @Column()
//     name;

//     @Column()
//     username;

//     @Column()
//     password;
// }

// module.exports = Users;
