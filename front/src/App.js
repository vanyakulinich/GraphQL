import React, { Component } from 'react';
import './App.css';
import {getTodos, changeList} from './api/requests';
import TodoList from './components/TodoList';
import { observer, inject } from 'mobx-react';

@inject('store')
@observer
class App extends Component {
  // state = {
  //   todos: [],
  //   input: null,
  // }
  inputRef = React.createRef();

  componentDidMount() { 
    this.props.store.getTodoList();
  }

  todos = async () => {
    // const result = await getTodos()
    // const result = await this.props.store.getTodoList() 
    // this.setState({todos: result});
  }

  inputValue = (e) => this.setState({...this.state, input: e.target.value}) 
 
  // add = async () => {
  //   if(!this.state.input) return;
  //   const newTodoList = await changeList(this.state.input, 'add');
  //   this.setState({todos: newTodoList, input: null});
  //   this.inputRef.current.value = '';
  // }

  // updateTodoList = async (item, type) => {
  //   const newTodoList = await changeList(item, type)
  //   this.setState({...this.state, todos: newTodoList})
  // }

  render() {
    return (
      <div className="App">
          <h2>ToDo List</h2>
          <TodoList
            listClass='todo-list'
            itemClass='todo-item'
            list={this.props.store.todoList}
            changeList={this.updateTodoList}
          />
          <div className='add-todo'>
            <input onChange={this.inputValue} ref={this.inputRef}/>
            <button onClick={this.add}>Add item</button>
          </div>
      </div>
    );
  }
}

export default App;
