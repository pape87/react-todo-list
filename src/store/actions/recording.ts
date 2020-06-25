import produce from "immer";

import { State, store } from "../state";
import { registerToStore } from "../store-util";

export function setIsRecording(state: State, isRecording: boolean) {
  return produce(state, draftState => {
    draftState.isRecording = isRecording;
  });
}

export function clearRecording(state: State) {
  return produce(state, draftState => {
    draftState.recordedActions = [];
  });
}


registerToStore(
  store,
  setIsRecording,
  clearRecording
);