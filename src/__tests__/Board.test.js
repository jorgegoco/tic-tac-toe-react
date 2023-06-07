import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Board from '../components/Board';

describe('Board', () => {
  const squares = ['X', 'O', null, 'O', 'X', null, null, null, null];
  const winningSquares = [0, 4, 7];
  const onClick = jest.fn();

  it('renders correctly', () => {
    const { getByTestId } = render(
      <Board squares={squares} winningSquares={winningSquares} onClick={onClick} />,
    );
    const board = getByTestId('board');
    expect(board).toBeInTheDocument();
  });

  it('renders the correct number of squares', () => {
    const { getAllByTestId } = render(
      <Board squares={squares} winningSquares={winningSquares} onClick={onClick} />,
    );
    const squareElements = getAllByTestId('square');
    expect(squareElements.length).toBe(9);
  });

  it('renders the correct values in each square', () => {
    const { getAllByTestId } = render(
      <Board squares={squares} winningSquares={winningSquares} onClick={onClick} />,
    );
    const squareElements = getAllByTestId('square');
    squareElements.forEach((square, i) => {
      expect(square.textContent).toBe(squares[i] || '');
    });
  });

  it('calls the onClick function when a square is clicked', () => {
    const { getAllByTestId } = render(
      <Board squares={squares} winningSquares={winningSquares} onClick={onClick} />,
    );
    const squareElements = getAllByTestId('square');
    fireEvent.click(squareElements[2]);
    expect(onClick).toHaveBeenCalledTimes(1);
    expect(onClick).toHaveBeenCalledWith(2);
  });

  it('highlights the winning squares', () => {
    const { getAllByTestId } = render(
      <Board squares={squares} winningSquares={winningSquares} onClick={onClick} />,
    );
    const squareElements = getAllByTestId('square');
    squareElements.forEach((square, i) => {
      if (winningSquares.includes(i)) {
        expect(square).toHaveClass('winning');
      } else {
        expect(square).not.toHaveClass('winning');
      }
    });
  });
});
