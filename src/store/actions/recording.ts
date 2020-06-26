import produce from "immer";

import { State, store, ToDo } from "../state";
import { registerToStore } from "../store-util";

export function setIsRecording(state: State, isRecording: boolean) {
  return produce(state, draftState => {
    draftState.isRecording = isRecording;
  });
}

export function clearRecording(state: State) {
  return produce(state, draftState => {
    draftState.recordingState.recordedActions = [];
  });
}

export function saveToDoState(state: State, toDos: ToDo[]) {
  return produce(state, draftState => {
    draftState.recordingState.recordingInitialToDoState = state.toDos;
  });
}


registerToStore(
  store,
  setIsRecording,
  clearRecording,
  saveToDoState
);