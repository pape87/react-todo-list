import React from 'react';

import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

import { useStore, RecordedAction } from '../../store/state';
import { setIsRecording, clearRecording } from '../../store/actions/recording';

import { clearToDos } from '../../store/actions/todo';

const StyledButton = styled(Button) `
  margin: 5px;
`

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

  return (<Container maxWidth="md">
    <StyledButton variant="contained" disabled={state.isRecording || state.recordedActions.length > 0} onClick={toggleRecording}>Record</StyledButton>
    <StyledButton variant="contained" disabled={!state.isRecording} onClick={toggleRecording}>Stop recording</StyledButton>
    <StyledButton variant="contained" disabled={state.recordedActions.length === 0} onClick={clear}>Clear recording</StyledButton>
    <StyledButton variant="contained" disabled={state.recordedActions.length === 0} onClick={play}>Play recording</StyledButton>
  </Container>)
};

export default Recorder;
