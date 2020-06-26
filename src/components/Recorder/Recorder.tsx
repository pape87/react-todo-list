import React from 'react';

import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

import { useStore, RecordedAction } from '../../store/state';
import { setIsRecording, clearRecording, saveToDoState } from '../../store/actions/recording';

import { setToDoList } from '../../store/actions/todo';

const StyledButton = styled(Button) `
  margin: 5px;
`

const Recorder: React.FC = () => {

  const [state, store] = useStore();

  async function toggleRecording() {
    if(!state.isRecording){
      await store.dispatch(saveToDoState, state.toDos);
    }
    store.dispatch(setIsRecording, !state.isRecording);
  }

  function clear() {
    store.dispatch(clearRecording);
  }

  async function play() {
    await store.dispatch(setToDoList, state.recordingState.recordingInitialToDoState);
    const interval = 1000;
    let promise = Promise.resolve();
    
    state.recordingState.recordedActions.forEach((x: RecordedAction) => {
      promise = promise.then(() => {
        store.dispatch(x.action, x.value[0]);
        return new Promise((resolve) => {
          setTimeout(resolve, interval);
        });
      });
    });
  }

  return (<Container maxWidth="md">
    <StyledButton variant="contained" disabled={state.isRecording || state.recordingState.recordedActions.length > 0} onClick={toggleRecording}>Record</StyledButton>
    <StyledButton variant="contained" disabled={!state.isRecording} onClick={toggleRecording}>Stop recording</StyledButton>
    <StyledButton variant="contained" disabled={state.recordingState.recordedActions.length === 0} onClick={clear}>Clear recording</StyledButton>
    <StyledButton variant="contained" disabled={state.recordingState.recordedActions.length === 0} onClick={play}>Play recording</StyledButton>
  </Container>)
};

export default Recorder;
