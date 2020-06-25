import React from 'react';

import './Recorder.css';

import { useStore, RecordedAction } from '../../store/state';
import { setIsRecording, clearRecording } from '../../store/actions/recording';

import { clearToDos } from '../../store/actions/todo';

const Recorder: React.FC = () => {

  const [state, store] = useStore();

  function toggleRecording() {
    store.dispatch(setIsRecording, !state.isRecording);
  }

  function clear() {
    store.dispatch(clearRecording);
  }

  async function play() {
    await store.dispatch(clearToDos);
    const interval = 1000;     
    let promise = Promise.resolve();

    state.recordedActions.forEach((x: RecordedAction) => {
      promise = promise.then(function () {
        store.dispatch(x.action, x.value[0]);
        return new Promise(function (resolve) {
          setTimeout(resolve, interval);
        });
      });
    });


  }

  return (<div className="Recorder" data-testid="Recorder">
    <button disabled={state.isRecording || state.recordedActions.length > 0} onClick={toggleRecording}>Record</button>
    <button disabled={!state.isRecording} onClick={toggleRecording}>Stop recording</button>
    <button disabled={state.recordedActions.length === 0} onClick={clear}>Clear recording</button>
    <button disabled={state.recordedActions.length === 0} onClick={play}>Play recording</button>
  </div>)
};

export default Recorder;
