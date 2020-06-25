import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TodoItem from './TodoItem';

describe('<TodoItem />', () => {
  test('it should mount', () => {
    render(<TodoItem />);
    
    const todoItem = screen.getByTestId('TodoItem');

    expect(todoItem).toBeInTheDocument();
  });
});