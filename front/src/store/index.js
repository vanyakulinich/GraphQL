import { observable, computed, action } from 'mobx';
// import * as mobx from 'mobx';
import { getTodos } from '../api/requests';

// mobx.configure({ enforceActions: 'observed' })

class Store {
  @observable todos;
  @observable input;

  constructor() {
    this.todos = [];
    this.input = null;
  }

  @computed get todoList() {
    return this.todos;
  }

  @action
    async getTodoList() {
     const result = await getTodos();
     this.todos = [...result];
    }
}

const store = new Store();

export default store;
export { Store }