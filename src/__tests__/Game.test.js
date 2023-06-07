import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Game from '../components/Game';

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

test('clicking on a square after the game has been won does not update the board', () => {
  const { getAllByRole, getByText } = render(<Game />);
  const squares = getAllByRole('button');
  fireEvent.click(squares[0]);
  fireEvent.click(squares[3]);
  fireEvent.click(squares[1]);
  fireEvent.click(squares[4]);
  fireEvent.click(squares[2]);
  fireEvent.click(squares[5]);
  const statusElement = getByText(/Winner: X/i);
  expect(statusElement).toBeInTheDocument();
  expect(squares[5]).toHaveTextContent('');
});

test('clicking on the reset button resets the game board and status', () => {
  const { getAllByRole, getByText } = render(<Game />);
  const squares = getAllByRole('button');
  fireEvent.click(squares[0]);
  fireEvent.click(squares[3]);
  fireEvent.click(squares[1]);
  fireEvent.click(squares[4]);
  fireEvent.click(squares[2]);
  const resetButton = getByText(/Start/i);
  fireEvent.click(resetButton);
  expect(squares[0]).toHaveTextContent('');
  expect(squares[1]).toHaveTextContent('');
  expect(squares[2]).toHaveTextContent('');
  expect(squares[3]).toHaveTextContent('');
  expect(squares[4]).toHaveTextContent('');
  expect(squares[5]).toHaveTextContent('');
  expect(squares[6]).toHaveTextContent('');
  expect(squares[7]).toHaveTextContent('');
  expect(squares[8]).toHaveTextContent('');
  const statusElement = getByText(/Next Player: X/i);
  expect(statusElement).toBeInTheDocument();
});

test('clicking on a "Go to move #" button updates the board to the correct move', () => {
  const { getAllByRole, getByText } = render(<Game />);
  const squares = getAllByRole('button');
  fireEvent.click(squares[0]);
  fireEvent.click(squares[3]);
  fireEvent.click(squares[1]);
  fireEvent.click(squares[4]);
  fireEvent.click(squares[2]);
  const moveButton = getByText(/Go to move #3/i);
  fireEvent.click(moveButton);
  expect(squares[0]).toHaveTextContent('X');
  expect(squares[1]).toHaveTextContent('X');
  expect(squares[2]).toHaveTextContent('');
  expect(squares[3]).toHaveTextContent('O');
  expect(squares[4]).toHaveTextContent('');
  expect(squares[5]).toHaveTextContent('');
  expect(squares[6]).toHaveTextContent('');
  expect(squares[7]).toHaveTextContent('');
  expect(squares[8]).toHaveTextContent('');
});

test('clicking on the "Start" button resets the game board and status', () => {
  const { getAllByRole, getByText } = render(<Game />);
  const squares = getAllByRole('button');
  fireEvent.click(squares[0]);
  fireEvent.click(squares[3]);
  fireEvent.click(squares[1]);
  fireEvent.click(squares[4]);
  fireEvent.click(squares[2]);
  const startButton = getByText(/Start/i);
  fireEvent.click(startButton);
  expect(squares[0]).toHaveTextContent('');
  expect(squares[1]).toHaveTextContent('');
  expect(squares[2]).toHaveTextContent('');
  expect(squares[3]).toHaveTextContent('');
  expect(squares[4]).toHaveTextContent('');
  expect(squares[5]).toHaveTextContent('');
  expect(squares[6]).toHaveTextContent('');
  expect(squares[7]).toHaveTextContent('');
  expect(squares[8]).toHaveTextContent('');
  const statusElement = getByText(/Next Player: X/i);
  expect(statusElement).toBeInTheDocument();
});
