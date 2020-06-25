import React from 'react';

import './Recorder.css';

import { useStore } from '../../store/state';
import { setIsRecording } from '../../store/actions/recording';
import { recordingMiddleware } from '../../store/middlewares/recorder';
import { MiddlewarePlacement } from 'aurelia-store';

const Recorder: React.FC = () => {

  const [state, store] = useStore();
  
  function toggleRecording() {
    store.dispatch(setIsRecording, !state.isRecording);
  }

  return (<div className="Recorder" data-testid="Recorder">
    <button disabled={state.isRecording} onClick={toggleRecording}>Record</button>
    <button disabled={!state.isRecording} onClick={toggleRecording}>Stop recording</button>
    <button disabled={state.recordedActions.length === 0}>Clear recording</button>
    <button disabled={state.recordedActions.length === 0}>Play recording</button>
  </div>)
};

export default Recorder;
