import React from 'react';

import './TodoList.css';

import { useStore, ToDo } from '../../store/state';
import { deleteToDo } from '../../store/actions/todo';
import TodoItem from '../TodoItem/TodoItem';

const TodoList: React.FC = () => {
  const [state, store] = useStore();

  function removeToDo(id: string) {
    store.dispatch(deleteToDo, id);
  }

  return (
    <div className="TodoList" data-testid="TodoList">
      <ul>
        {
          state.toDos.map((x: ToDo, index: number) => [<TodoItem key={index} t={x}></TodoItem>])
        }
      </ul>
    </div>
  );
}

export default TodoList;
