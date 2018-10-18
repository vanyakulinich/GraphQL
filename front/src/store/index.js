import { observable, computed, action } from 'mobx';
import { getTodos, changeList } from '../api/requests';

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
  
  @action
  inputValue(e) {
    this.input = e;
  }

  @action
    async modifyTodoList(type, item) {
      // if(type === 'add') this.input = null;
      if(!item && !this.input) return;
      const toBase = item ? item : this.input
      const result = await changeList(toBase, type);
      this.todos = [...result];
      if(type === 'add') this.input = null;
  }
}

const store = new Store();

export default store;
export { Store }