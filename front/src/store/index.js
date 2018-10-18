import { observable, computed } from 'mobx';

class Store {
  @observable todos = [];
  @observable input = null;

  @computed
  get todoList() {
    return this.todos;
  }
}

const store = new Store();

export default store;