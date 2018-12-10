import {combineReducers} from 'redux';
import {
    TODO_ADD,
    TODO_TOGGLE,
    FILTER_SET
} from './constants';
  
const todos = [
    {id: '0', name: 'Learn Redux'},
    {id: '1', name: 'Learn Mobx'},
];

export function todoReducer(state = todos, action) {
    switch(action.type) {
      case TODO_ADD : 
        return applyAddTodo(state, action);
      
      case TODO_TOGGLE : 
        return applyToggleTodo(state, action);
      
      default : return state;
    }
}
  
function applyAddTodo(state, action) {
    const todo = Object.assign({}, action.todo, {completed: false});
    return state.concat(todo);
}

function applyToggleTodo(state, action) {
    return state.map(todo =>
        todo.id === action.todo.id
        ? Object.assign({}, todo, { completed: !todo.completed })
        : todo
    );
}

//---------------------------------------------------

function filterReducer(state = 'SHOW_ALL', action) {
    switch(action.type) {
        case FILTER_SET:
            return applySetFilter(state, action);

        default:
            return state;
    }
}

function applySetFilter(state, action) {
    return action.filter;
}

//---------------------------------------------------

export const rootReducer = combineReducers({
    todoState: todoReducer,
    filterState: filterReducer
})
