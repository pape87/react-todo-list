import React from 'react';

import './TodoList.css';

import { useStore } from '../../store/state';

const TodoList: React.FC = () => {
  const [state] = useStore();

  return (
    <div className="TodoList" data-testid="TodoList">
      <ul>
        {
          state.toDos.map((x, index) => [<li key={index}>{x}</li>])
        }
      </ul>
    </div>
  );
}

export default TodoList;
