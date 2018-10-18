import React from 'react';
import { observer, inject } from 'mobx-react';

const Input = ({store}) => {
  const change = (e) => store.inputValue(e.target.value);
  return (
    <input 
      type="text"
      placeholder={!store.input ? 'Add new item' : null}
      onChange={change}
    />
  );
};

export default inject('store')(observer(Input));