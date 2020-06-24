import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NewTodo from './NewTodo';

describe('<NewTodo />', () => {
  test('it should mount', () => {
    render(<NewTodo />);
    
    const newTodo = screen.getByTestId('NewTodo');

    expect(newTodo).toBeInTheDocument();
  });
});