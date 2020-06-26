import { Observable } from "rxjs";
import { Store } from "aurelia-store";
import { useEffect, useState } from "react";

export type ToDo = {
  id: string;
  name: string;
  description: string;
  creationDate: string;
}

export type RecordingState = {
  recordedActions: RecordedAction[];
  recordingInitialToDoState: ToDo[];
}

export type RecordedAction = {
  action: string;
  value: any;
}

export type State = {
  toDos: ToDo[];
  isRecording: boolean;
  recordingState: RecordingState;
}

export const INITIAL_STATE = {
  toDos: [],
  isRecording: false,
  recordingState: {
    recordedActions: [],
    recordingInitialToDoState: []
  }
} as State;

const storedStateString = localStorage.getItem("todo-app");
const initialState = storedStateString ? JSON.parse(storedStateString) as State : INITIAL_STATE;

export const store = new Store<State>(initialState, {});

export const useStore = <T = State>(options?: {
  selector: (state: Observable<State>) => Observable<T>,
  initial: T
}): [T | State, Store<State>] => {
  const [state, setState] = useState<T | State>(options ? options.initial : INITIAL_STATE);

  useEffect(() => {
    const subscription = options
      ? options.selector(store.state).subscribe((value: T) => setState(value))
      : store.state.subscribe((state) => setState(state));

    return () => subscription.unsubscribe();
  });

  return [
    state,
    store
  ];
}