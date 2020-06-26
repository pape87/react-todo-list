import React, { useState, useEffect } from 'react';

import Input from '@material-ui/core/Input';

import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';

import styled from 'styled-components';

import { ToDo, useStore } from '../../store/state';
import { deleteToDo, updateToDo } from '../../store/actions/todo';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';


const StyledInput = styled(Input)`
  margin-left: 10px;
`
const TodoItem: React.FC<{ t: ToDo }> = (props: { t: ToDo }) => {
  const [toDo, setToDo] = useState(props.t);
  const [mode, setMode] = useState("view")
  const [, store] = useStore();

  useEffect(() => {
    setToDo(props.t);
  }, [props.t]);

  function updateField(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
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
    mode === "view" ?
      (<ListItem>
        <ListItemText
          primary={toDo.name}
          secondary={toDo.description}
        ></ListItemText>
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="comments" onClick={removeToDo}>
            <DeleteIcon />
          </IconButton>
          <IconButton edge="end" aria-label="comments" onClick={switchMode}>
            <EditIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>

      ) :
      (<ListItem>
        <StyledInput type="text"
          placeholder="enter the name"
          onChange={(e) => updateField(e)}
          name="name"
          value={toDo.name} />
        <StyledInput type="text"
          placeholder="enter the description"
          onChange={(e) => updateField(e)}
          name="description"
          value={toDo.description} />
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="comments" onClick={saveEdit}>
            <SaveIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      )
  )
};

export default TodoItem;
