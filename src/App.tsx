import React from 'react';

import { initialize } from "aurelia-pal-browser";

import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList/TodoList';
import NewTodo from './components/NewTodo/NewTodo';

initialize();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NewTodo></NewTodo>
        <TodoList></TodoList>
      </header>
    </div>
  );
}

export default App;
