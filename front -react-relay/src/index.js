import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store';
import { Provider } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

const stores = {store};

ReactDOM.render(
    <Provider {...stores}> 
      <div>
        <App />
        <DevTools/> 
      </div>
    </Provider>,
document.getElementById('root'));



