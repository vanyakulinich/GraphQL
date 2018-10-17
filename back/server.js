// server
const { ApolloServer } = require('apollo-server-express');
const app = require('express')();
const PORT = process.env.PORT || 4000;

const typeDefs = require('./schema/types');
const resolvers = require('./schema/resolvers');

const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app }); 
app.listen({ port: PORT }, () =>
console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`)
)
