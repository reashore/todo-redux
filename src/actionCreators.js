import {
    TODO_ADD,
    TODO_TOGGLE
} from './constants';

export function createAddTodo(id, name){
    return{
        type: TODO_ADD,
        todo: {id, name}
    }
}

export function createToggleTodo(id){
    return{
        type: TODO_TOGGLE,
        todo: {id}
    }
}