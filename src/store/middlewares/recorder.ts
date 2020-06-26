import { State } from "../state";
import produce from "immer";

export function recordingMiddleware(
  current: State,
  original: State | undefined,
  settings: any,
  action: any
) {
  if (original?.isRecording && current.isRecording) {
    const updatedState = produce(current, draftState => {
      draftState.recordingState.recordedActions.push({ action: action.name, value: action.params });
    });
    return updatedState;
  }
  return current;
}