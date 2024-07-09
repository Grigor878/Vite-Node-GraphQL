require('dotenv').config();

const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { createConnection } = require('typeorm');
const cors = require('cors');

const schema = require('./schema/schema');
const Users = require('./entities/users');

const port = process.env.DB_PORT || 5000;

(async () => {
    try {
        const connection = await createConnection({
            type: 'mysql',
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            database: process.env.DB_NAME,
            username: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            logging: true,
            synchronize: true,
            entities: [Users]
        });

        console.log('Connected to MySQL database');

        const app = express();

        app.use(cors());

        app.use('/graphql', graphqlHTTP({
            schema: schema,
            graphiql: true,
            context: { db: connection }
        }));

        app.listen(port, () => {
            console.log(`Server started on port ${port}`)
        });
    } catch (err) {
        console.error('Error connecting to the database:', err);
    }
})()