require('dotenv').config();

const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const cors = require('cors');
const schema = require('./schema/schema');
const mysql = require('mysql2/promise');
const port = process.env.DB_PORT || 5000;

(async () => {
    try {
        const connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            database: process.env.DB_NAME,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD
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
            console.log(`Server started on port ${port}`);
        });
    } catch (err) {
        console.error('Error connecting to the database:', err);
    }
})()