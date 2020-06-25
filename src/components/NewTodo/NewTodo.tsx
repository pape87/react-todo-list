import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import './NewTodo.css';

import { useStore, ToDo } from '../../store/state';
import { addToDo } from '../../store/actions/todo';

const NewTodo: React.FC = () => {

  const [newToDo, setNewToDo] = useState({
    name: "",
    description: ""
  } as ToDo);
  const [, store] = useStore();

  function addNewToDo() {
    if (newToDo.name || newToDo.description) {
      newToDo.id = uuidv4();
      newToDo.creationDate = Date.now.toString();
      store.dispatch(addToDo, newToDo);
      setNewToDo({
        name: "",
        description: ""
      } as ToDo);
    }
  }

  function updateField(e: React.ChangeEvent<HTMLInputElement>) {
    setNewToDo({ ...newToDo, [e.target.name]: e.target.value });
  }

  return (
    <div className="NewTodo" data-testid="NewTodo">
      <input type="text"
        placeholder="enter the name"
        onChange={(e) => updateField(e)}
        name="name"
        value={newToDo.name} />
      <input type="text"
        placeholder="enter the description"
        onChange={(e) => updateField(e)}
        name="description"
        value={newToDo.description} />
      <button onClick={addNewToDo}>Add</button>
    </div>
  )
};

export default NewTodo;
