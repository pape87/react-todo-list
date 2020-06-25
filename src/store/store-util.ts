import { Reducer, Store } from "aurelia-store";
import { State } from "../store/state";

export function registerToStore(store: Store<State>, ...actions: Array<Reducer<State>>) {
  if (store) {

    actions.forEach((a) => {
      store.registerAction(a.name, a);
    });
  }
}