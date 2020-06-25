
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

registerToStore(
  store,
  addToDo,
  deleteToDo
);