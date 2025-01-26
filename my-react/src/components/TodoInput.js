import React, { useState, useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

const TodoInput = () => {
  const [task, setTask] = useState('');
  const { addTodo } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() === '') return;
    addTodo(task);
    setTask('');
  };

  return (
    <div className="todo-input-container">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={handleSubmit}>Add Task</button>
    </div>
  );
};

export default TodoInput;
