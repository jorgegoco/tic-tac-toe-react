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

const Board = ({squares, onClick}) => (
  <div style={style}>
    <Square value={squares[0]} onClick={onClick} />
    <Square value={squares[1]} onClick={onClick} />
    <Square value={squares[2]} onClick={onClick} />
    <Square value={squares[3]} onClick={onClick} />
    <Square value={squares[4]} onClick={onClick} />
    <Square value={squares[5]} onClick={onClick} />
    <Square value={squares[6]} onClick={onClick} />
    <Square value={squares[7]} onClick={onClick} />
    <Square value={squares[8]} onClick={onClick} />
  </div>
);

export default Board;

Board.propTypes = {
  squares: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired
};
