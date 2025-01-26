import React from "react";
import { TodoProvider } from "./context/TodoContext";
import TodoList from "./components/TodoList";   // Перевірте правильність шляху
import TodoInput from "./components/TodoInput"; // Перевірте правильність шляху
import "./App.css"; // Якщо ви використовуєте стилі

function App() {
  return (
    <TodoProvider>
      <div className="App">
        <h1>Todo App</h1>
        <TodoInput />
        <TodoList />
      </div>
    </TodoProvider>
  );
}

export default App;
