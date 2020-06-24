import React, { useState } from 'react';

import './NewTodo.css';

import { useStore } from '../../store/state';
import { addToDo } from '../../store/actions/todo';

const NewTodo: React.FC = () => {

  const [newToDo, setNewToDo] = useState("");
  const [, store] = useStore();

  function addNewToDo() {
    store.dispatch(addToDo, newToDo);
    setNewToDo("");
  }

  return (
    <div className="NewTodo" data-testid="NewTodo">
      <input type="text"
        placeholder="enter the new ToDo"
        onChange={(e) => setNewToDo(e.target.value)} 
        value={newToDo}/>
      <button onClick={addNewToDo}>Add</button>
    </div>
  )
};

export default NewTodo;
