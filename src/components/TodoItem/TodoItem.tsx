import React, { useState, useEffect } from 'react';

import './TodoItem.css';

import { ToDo, useStore } from '../../store/state';
import { deleteToDo, updateToDo } from '../../store/actions/todo';


const TodoItem: React.FC<{ t: ToDo }> = (props: { t: ToDo }) => {
  const [toDo, setToDo] = useState(props.t);
  const [mode, setMode] = useState("view")
  const [, store] = useStore();

  useEffect(() => {
    setToDo(props.t);
  }, [props.t]);

  function updateField(e: React.ChangeEvent<HTMLInputElement>) {
    setToDo({ ...toDo, [e.target.name]: e.target.value });
  }

  function removeToDo() {
    store.dispatch(deleteToDo, toDo.id);
  }

  function switchMode() {
    setMode(mode === "view" ? "edit" : "view");
  }

  function saveEdit() {
    store.dispatch(updateToDo, toDo);
    switchMode();
  }

  return (
    <li>{mode === "view" ?
      (<div>{toDo.name + "-" + toDo.description}
        <button onClick={removeToDo}>Delete</button>
        <button onClick={switchMode}>Edit</button>
      </div>) :
      (<div>
        <input type="text"
          placeholder="enter the name"
          onChange={(e) => updateField(e)}
          name="name"
          value={toDo.name} />
        <input type="text"
          placeholder="enter the description"
          onChange={(e) => updateField(e)}
          name="description"
          value={toDo.description} />
        <button onClick={saveEdit}>Save</button>
      </div>
      )}

    </li>
  )
};

export default TodoItem;
