
import produce from "immer";
import { State, store, ToDo } from "../state";
import { registerToStore } from "../store-util";

export function addToDo(state: State, newToDo: ToDo) {
  return produce(state, draftState => {
    draftState.toDos.push(newToDo);
  });
}

export function deleteToDo(state: State, id: string) {
  return produce(state, draftState => {
    draftState.toDos.splice(draftState.toDos.findIndex((x) => x.id === id), 1);
  });
}

export function updateToDo(state: State, toDo: ToDo) {
  const index = state.toDos.findIndex((x) => x.id === toDo.id);
  return produce(state, draftState => {
    draftState.toDos[index] = toDo;
  });
}

export function clearToDos(state: State){
  return produce(state, draftState => {
    draftState.toDos = [];
  });
}

registerToStore(
  store,
  addToDo,
  deleteToDo,
  updateToDo,
  clearToDos
);