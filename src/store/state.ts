import { Observable } from "rxjs";
import { Store, MiddlewarePlacement } from "aurelia-store";
import { useEffect, useState } from "react";
import { recordingMiddleware } from "./middlewares/recorder";

export type ToDo = {
  id: string;
  name: string;
  description: string;
  creationDate: string;
}

export type RecordedAction = {
  action: string;
  value: any;
}

export type State = {
  toDos: ToDo[];
  isRecording: boolean;
  recordedActions: RecordedAction[];
}

export const INITIAL_STATE = {
  toDos: [],
  isRecording: false,
  recordedActions: []
} as State;


export const store = new Store<State>(INITIAL_STATE, {});

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