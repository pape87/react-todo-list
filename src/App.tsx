import React from 'react';

import { initialize } from "aurelia-pal-browser";
import { localStorageMiddleware } from 'aurelia-store';
 
import './App.css';
import TodoList from './components/TodoList/TodoList';
import NewTodo from './components/NewTodo/NewTodo';
import Recorder from './components/Recorder/Recorder';
import { useStore } from './store/state';
import { recordingMiddleware } from './store/middlewares/recorder';
import { MiddlewarePlacement } from 'aurelia-store';

initialize();
function App() {
  const [, store] = useStore();
  store.registerMiddleware(recordingMiddleware, MiddlewarePlacement.After);
  store.registerMiddleware(localStorageMiddleware, MiddlewarePlacement.After, { key: 'todo-app' });

  return (
    <div className="App">
      <header className="App-header">
        <Recorder></Recorder>
        <NewTodo></NewTodo>
        <TodoList></TodoList>
      </header>
    </div>
  );
}

export default App;
