import React from 'react';

import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';

import { useStore, ToDo } from '../../store/state';
import TodoItem from '../TodoItem/TodoItem';

const TodoList: React.FC = () => {
  const [state] = useStore();

  return (
    <Container maxWidth="md">
      <List>
        {
          state.toDos.map((x: ToDo, index: number) => [<TodoItem key={index} t={x}></TodoItem>])
        }
      </List>
    </Container>
  );
}

export default TodoList;
