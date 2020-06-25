import React from 'react';

import './TodoList.css';

import { useStore, ToDo } from '../../store/state';
import TodoItem from '../TodoItem/TodoItem';

const TodoList: React.FC = () => {
  const [state] = useStore();

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
