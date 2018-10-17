const { gql } = require('apollo-server-express');
const typeDefs = gql`
  type Todo {
    name: String
    isDone: Boolean
  }
  type Query {
    todos: [Todo]
  }
  type Mutation {
    change(item: String, type: String): [Todo]
  }
`;

module.exports = typeDefs;