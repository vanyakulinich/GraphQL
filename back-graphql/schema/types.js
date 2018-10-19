import { buildSchema } from 'graphql';

const schema = buildSchema(`
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
`);

export default schema;