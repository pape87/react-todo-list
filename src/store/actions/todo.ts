
import produce from "immer";
import { State, store } from "../state";

export function addToDo(state: State, newToDo: string) {
  return produce(state, draftState => {
    draftState.toDos.push(newToDo);
  });
}

store.registerAction("addToDo", addToDo);