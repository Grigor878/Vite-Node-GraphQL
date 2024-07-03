const express = require('express');

const { graphqlHTTP } = require('express-graphql')

const cors = require('cors');

const schema = require('./schema')

const app = express();

app.use(cors())

app.use("/graphql", graphqlHTTP({
    graphiql: true,
    schema
}))

const port = 5000;

app.listen(port, () => console.log(`server listening on port ${port}`))