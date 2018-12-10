import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import './index.css';
import App from './App';
import {reducer} from './reducers';
import {createAddTodo, createToggleTodo} from './actionCreators';
import * as serviceWorker from './serviceWorker';

const store = createStore(reducer, []);
const root = document.getElementById('root');
const demoStore = () => {
    console.log('initial state:');
    console.log(store.getState());
    
    const unsubscribe = store.subscribe(() => {
      console.log('store was updated, current state:');
      console.log(store.getState());
    });
    
    store.dispatch(createAddTodo('0', 'Learn Redux'));
    store.dispatch(createAddTodo('1', 'Learn Mobx'));
    store.dispatch(createToggleTodo('0'));

    unsubscribe();
}

ReactDOM.render(<App />, root);

demoStore();

serviceWorker.unregister();
