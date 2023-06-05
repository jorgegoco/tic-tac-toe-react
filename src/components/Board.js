import React from 'react';
import PropTypes from 'prop-types';
import Square from './Square';

const style = {
  border: '4px solid darkblue',
  borderRadius: '10px',
  width: '250px',
  height: '250px',
  margin: '0 auto',
  display: 'grid',
  gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)',
};

const Board = ({ squares, onClick }) => (
  <div style={style}>
    {squares.map((square, i) => (
      // eslint-disable-next-line react/no-array-index-key
      <Square key={i} value={square} onClick={() => onClick(i)} />
    ))}
  </div>
);
Board.propTypes = {
  squares: PropTypes.instanceOf(Array).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Board;
