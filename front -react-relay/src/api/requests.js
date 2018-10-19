import graphql from './client';
import gql from "graphql-tag";

export const getTodos = () => {
  return graphql
    .query({
      query: gql`
        {
          todos {
            name
            isDone
          }
        }
      `
    })
    .then(result => result.data.todos)
    .catch(er => console.log(er))
}

export const changeList = (item, type) => {
  return graphql
    .mutate({
      variables: {item, type},
      mutation: gql`
        mutation Change($item: String, $type: String){
          change(item: $item, type: $type) {
            name
            isDone
          }
        }
      `, 
    })
    .then(result => result.data.change)
    .catch(er => console.log(er))
}
