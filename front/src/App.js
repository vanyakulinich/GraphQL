import React, { Component } from 'react';
import './App.css';
import {getTodos, changeList} from './api/requests';
import TodoList from './components/TodoList';

class App extends Component {
  state = {
    todos: [],
    input: null,
  }
  inputRef = React.createRef();

  componentDidMount() { 
    this.todos(); 
  }

  todos = async () => {
    const result = await getTodos()
    this.setState({todos: result});
  }

  inputValue = (e) => this.setState({...this.state, input: e.target.value}) 
 
  add = async () => {
    if(!this.state.input) return;
    const newTodoList = await changeList(this.state.input, 'add');
    this.setState({todos: newTodoList, input: null});
    this.inputRef.current.value = '';
  }

  updateTodoList = async (item, type) => {
    const newTodoList = await changeList(item, type)
    this.setState({...this.state, todos: newTodoList})
  }

  render() {
    const { todos } = this.state;
    return (
      <div className="App">
          <h2>ToDo List</h2>
          <TodoList
            listClass='todo-list'
            itemClass='todo-item'
            list={todos}
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
