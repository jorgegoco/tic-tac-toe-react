import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Game from './Game';

test('renders Tic Tac Toe header', () => {
  const { getByText } = render(<Game />);
  const headerElement = getByText(/Tic Tac Toe/i);
  expect(headerElement).toBeInTheDocument();
});

test('renders game status with next player', () => {
  const { getByText } = render(<Game />);
  const statusElement = getByText(/Next Player: X/i);
  expect(statusElement).toBeInTheDocument();
});

test('clicking on a square updates the board', () => {
  const { getAllByRole } = render(<Game />);
  const squares = getAllByRole('button');
  fireEvent.click(squares[0]);
  expect(squares[0]).toHaveTextContent('X');
});

test('clicking on a square twice does not update the board', () => {
  const { getAllByRole } = render(<Game />);
  const squares = getAllByRole('button');
  fireEvent.click(squares[0]);
  fireEvent.click(squares[0]);
  expect(squares[0]).toHaveTextContent('X');
});

test('clicking on a winning square highlights the winning squares', () => {
  const { getAllByRole, getByTestId } = render(<Game />);
  const squares = getAllByRole('button');
  fireEvent.click(squares[0]);
  fireEvent.click(squares[3]);
  fireEvent.click(squares[1]);
  fireEvent.click(squares[4]);
  fireEvent.click(squares[2]);
  const boardElement = getByTestId('board');
  expect(boardElement).toMatchSnapshot();
});
