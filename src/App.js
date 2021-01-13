import './App.css';
import Form from './components/Form.js';
import React, { useState, useEffect } from 'react';
import Todolist from './components/TodoList.js';

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setfilteredTodos] = useState([]);
  const [status, setStatus] = useState('all');

  useEffect(() => {
    getLocalTodos();
  }, []);
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setfilteredTodos(todos.filter(el => el.completed === true));

        break;
      case 'uncompleted':
        setfilteredTodos(todos.filter(el => el.completed === false));

        break;
      default:
        setfilteredTodos(todos);
        break;
    }
  };

  //Save to Local

  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };
  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLocal);
    }
  };

  return (
    <div className="App">
      <header>Ed's Todolist</header>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        setStatus={setStatus}
      />
      <Todolist
        setTodos={setTodos}
        todos={todos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
