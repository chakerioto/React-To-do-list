import './App.css';
import Form from './components/Form.js';
import React, { useState } from 'react';
import Todolist from './components/TodoList.js'

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header>
        Ed's Todolist
      </header>
      <Form inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos} />
      <Todolist />

    </div>
  );
}

export default App;
