import React from 'react';

const TodoApp = ({todos, onToggleTodo}) => {
    return (
        <div>
            <div>Todo Application</div>
            <TodoList todos={todos} onToggleTodo={onToggleTodo} />
        </div>
    );
};

export const TodoList = ({todos, onToggleTodo}) => {
    return (
        <div>
            {todos.map(todo => 
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggleTodo={onToggleTodo}
                />)
            }
        </div>
    );
};

export const TodoItem = ({todo, onToggleTodo}) => {
    const {id, name,completed} = todo;
    return (
        <div>
            {name}
            <button type='button' onClick={() => onToggleTodo(id)} >
                {completed ? 'Completed' : 'Incomplete'}
            </button>
        </div>
    );
};

export default TodoApp;



