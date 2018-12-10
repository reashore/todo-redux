import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import './index.css';
import TodoApp from './TodoApp';
import {rootReducer} from './reducers';
import {
    //createAddTodo, 
    createToggleTodo
    //createSetFilter
} from './actionCreators';
import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer);
const root = document.getElementById('root');
// const demoStore = () => {
//     console.log('initial state:');
//     console.log(store.getState());
    
//     const unsubscribe = store.subscribe(() => {
//       console.log('store was updated, current state:');
//       console.log(store.getState());
//     });
    
//     store.dispatch(createAddTodo('0', 'Learn Redux'));
//     store.dispatch(createAddTodo('1', 'Learn Mobx'));
//     store.dispatch(createToggleTodo('0'));
//     store.dispatch(createSetFilter('COMPLETED'));

//     unsubscribe();
// }
const onToggleTodo = (id) =>{
    console.log('onToggleTodo', id);
    store.dispatch(createToggleTodo(id))
}
const todos = store.getState().todoState;
const rootComponent = <TodoApp todos={todos} onToggleTodo={onToggleTodo} />

const render = () => ReactDOM.render(rootComponent, root);
store.subscribe(render);
render();

//demoStore();

//const rootComponent1 = <App />;
//ReactDOM.render(rootComponent, root);

serviceWorker.unregister();
