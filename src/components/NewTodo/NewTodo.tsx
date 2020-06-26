import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Input from '@material-ui/core/Input';
import styled from 'styled-components';

import { useStore, ToDo } from '../../store/state';
import { addToDo } from '../../store/actions/todo';

const StyledButton = styled(Button)`
  margin: 5px;
`

const StyledInput = styled(Input)`
  margin: 5px;
`

const NewTodo: React.FC = () => {

  const [newToDo, setNewToDo] = useState({
    name: "",
    description: ""
  } as ToDo);
  const [, store] = useStore();

  function addNewToDo() {
    if (newToDo.name || newToDo.description) {
      newToDo.id = uuidv4();
      newToDo.creationDate = new Date().toLocaleString();
      store.dispatch(addToDo, newToDo);
      setNewToDo({
        name: "",
        description: ""
      } as ToDo);
    }
  }

  function updateField(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setNewToDo({ ...newToDo, [e.target.name]: e.target.value });
  }

  return (
    <Container maxWidth="md">
      <StyledInput type="text"
        placeholder="enter the name"
        onChange={(e) => updateField(e)}
        name="name"
        value={newToDo.name} />
      <StyledInput type="text"
        placeholder="enter the description"
        onChange={(e) => updateField(e)}
        name="description"
        value={newToDo.description} />
      <StyledButton variant="contained" onClick={addNewToDo}>Add</StyledButton>
    </Container>
  )
};

export default NewTodo;
