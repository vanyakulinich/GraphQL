import {Todos, findAllTodos} from '../db';

const resolvers = {
  Query: {
    todos: () => findAllTodos()
  },
  Mutation: {
    change: (_, {item, type}) => {
      if(type === 'add') {
        return (
          Todos
          .create({name: item, isDone: false})
          .then(() => findAllTodos()))
      }
      if(type === 'delete') {
        return (
          Todos
          .destroy({where: {name: item}})
          .then(() => findAllTodos()))
      }
      if(type === 'update') {
        return Todos
          .findOne({
            where: {name: item},
          }).then(item => item.update({
            isDone: true
          }))
          .then(() => findAllTodos())
      }
    },
  },
};

export default resolvers;