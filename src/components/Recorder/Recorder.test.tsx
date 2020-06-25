import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Recorder from './Recorder';

describe('<Recorder />', () => {
  test('it should mount', () => {
    render(<Recorder />);
    
    const recorder = screen.getByTestId('Recorder');

    expect(recorder).toBeInTheDocument();
  });
});