import React from 'react';
import { inject } from 'mobx-react';

const Button = ({children, store}) => {
  const action = () => store.modifyTodoList('add');
  return (
    <button onClick={action}>
      {children}
    </button>
  );
};

export default inject('store')(Button);