import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import './index.css';
import App, {reducer} from './App';
import * as serviceWorker from './serviceWorker';

const store = createStore(reducer, []);
const root = document.getElementById('root');
const demoStore = () => {
    console.log('initial state:');
    console.log(store.getState());
    
    const unsubscribe = store.subscribe(() => {
      console.log('store update, current state:');
      console.log(store.getState());
    });
    
    store.dispatch({
      type: 'TODO_ADD',
      todo: { id: '0', name: 'learn redux', completed: false },
    });
    
    store.dispatch({
      type: 'TODO_ADD',
      todo: { id: '1', name: 'learn mobx', completed: false },
    });
    
    store.dispatch({
      type: 'TODO_TOGGLE',
      todo: { id: '0' },
    });
    
    unsubscribe();
}

ReactDOM.render(<App />, root);

demoStore();

serviceWorker.unregister();
