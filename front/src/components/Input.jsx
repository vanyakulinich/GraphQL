import React from 'react';
import { inject } from 'mobx-react';

const Input = ({store}) => {
  const change = (e) => store.inputValue(e.target.value);
  return (
    <input 
      type="text"
      placeholder='Add new item'
      onChange={change}
    />
  );
};

export default inject('store')(Input);