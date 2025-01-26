import React from "react";
import { useTodos } from "../context/TodoContext";

const TodoItem = ({ todo }) => {
  const { toggleComplete } = useTodos();

  return (
    <li
      onClick={() => toggleComplete(todo.id)}
      style={{ textDecoration: todo.completed ? "line-through" : "none", cursor: "pointer" }}
    >
      {todo.text}
    </li>
  );
};

export default TodoItem;
