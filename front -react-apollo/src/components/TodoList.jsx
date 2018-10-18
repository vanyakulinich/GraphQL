import React from 'react';
import shortid from 'shortid';
import { observer, inject } from 'mobx-react';

const TodoList = ({listClass, itemClass, store}) => {
  return (
    <ul className={listClass}>
      {store.todos && store.todos.map(item => {
        return (
          <li key={shortid.generate()} className={itemClass}>
            <div>
              <span key={shortid.generate()}>{item.name}</span>
              <span key={shortid.generate()} style={{color: item.isDone ? 'darkgreen' : 'brown'}}>
                Status: {item.isDone ? 'done' : 'to be done'}
              </span>
            </div>
            {!item.isDone && <button onClick={() => store.modifyTodoList('update', item.name)}>Done!</button>}
            <button onClick={()=> store.modifyTodoList('delete', item.name)}>x</button>
          </li>
        )
      })}
    </ul>
  )
};

export default inject('store')(observer(TodoList));