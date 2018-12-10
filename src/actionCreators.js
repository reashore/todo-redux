import {
    TODO_ADD,
    TODO_TOGGLE,
    FILTER_SET
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

export function createSetFilter(filter) {
    return {
        type: FILTER_SET,
        filter
    }
}
