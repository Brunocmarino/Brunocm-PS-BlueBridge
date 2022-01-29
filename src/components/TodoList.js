import React from "react";
import Todo from "./Todos";


const TodoList = ({todos}) => {
    return(
        <div className="todo-container">
            <ul className="todo-list"></ul>
            {todos.map((todo) => (
                <Todo text={todo.text} />
            ))}
            <Todo />
        </div>
    );
};

export default TodoList;