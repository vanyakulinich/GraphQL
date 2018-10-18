import React, { Component } from 'react';
import './App.css';
import {TodoList, Button, Input} from './components';
import { inject } from 'mobx-react';

@inject('store')
class App extends Component {

  componentDidMount() { 
    this.props.store.getTodoList();
  }
 
  render() {
    return (
      <div className="App">
          <h2>ToDo List</h2>
          <TodoList listClass='todo-list' itemClass='todo-item'/>
          <div className='add-todo'>
            <Input/>
            <Button>Add Item</Button>
          </div>
      </div>
    );
  }
}

export default App;
