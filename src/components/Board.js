import React from 'react';
import PropTypes from 'prop-types';
import Square from './Square';
import './board.css';

const Board = ({ squares, winningSquares, onClick }) => (
  <div className="board" data-testid="board">
    {squares.map((square, i) => (
      <Square
      // eslint-disable-next-line react/no-array-index-key
        key={i}
        value={square}
        onClick={() => onClick(i)}
        isWinning={winningSquares.includes(i)}
      />
    ))}
  </div>
);
Board.propTypes = {
  squares: PropTypes.instanceOf(Array).isRequired,
  onClick: PropTypes.func.isRequired,
  winningSquares: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default Board;
