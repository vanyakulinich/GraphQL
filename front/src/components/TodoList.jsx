import React from 'react';
import shortid from 'shortid';

const TodoList = ({listClass, itemClass, list, changeList}) => {
  return (
    <ul className={listClass}>
      {list && list.map(item => {
        return (
          <li key={shortid.generate()} className={itemClass}>
            <div>
              <span key={shortid.generate()}>{item.name}</span>
              <span key={shortid.generate()} style={{color: item.isDone ? 'darkgreen' : 'brown'}}>
                Status: {item.isDone ? 'done' : 'to be done'}
              </span>
            </div>
            {!item.isDone && <button onClick={() => changeList(item.name, 'update')}>do it!</button>}
            <button onClick={()=> changeList(item.name, 'delete')}>x</button>
          </li>
        )
      })}
    </ul>
  )
};

export default TodoList;