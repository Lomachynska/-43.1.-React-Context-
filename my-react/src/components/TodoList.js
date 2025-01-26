import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

const TodoList = () => {
  const { todos, toggleComplete, deleteTodo } = useContext(TodoContext);

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className={`todo-item ${todo.completed ? 'completed' : ''}`}
        >
          <span onClick={() => toggleComplete(todo.id)}>{todo.text}</span>
          <button
            className="delete-btn"
            onClick={() => deleteTodo(todo.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
