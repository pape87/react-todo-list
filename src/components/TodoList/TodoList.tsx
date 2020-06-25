import React from 'react';

import './TodoList.css';

import { useStore, ToDo } from '../../store/state';
import { deleteToDo } from '../../store/actions/todo';

const TodoList: React.FC = () => {
  const [state, store] = useStore();

  function removeToDo(id: string){
    store.dispatch(deleteToDo, id);
  }
  
  return (
    <div className="TodoList" data-testid="TodoList">
      <ul>
        {
          state.toDos.map((x: ToDo, index: number) => [<li key={index}>{x.name} - {x.description}<button onClick={() => removeToDo(x.id)}>Delete</button></li>])
        }
      </ul>
    </div>
  );
}

export default TodoList;
