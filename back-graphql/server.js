// server
import express from 'express';
import graphqlHTTP from 'express-graphql';
import cors from 'cors';
import { schema, rootResolver } from './schema';

const app = express();
const PORT = process.env.PORT || 4000;

app
  .use(cors())
  .use(
    '/graphql',
    graphqlHTTP({
      schema: schema,
      rootValue: rootResolver,
      graphiql: true,
    })
  );

app.listen(PORT, () => console.log('Running a GraphQL API server at http://localhost:4000/graphql'));

