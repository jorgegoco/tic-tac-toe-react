import React from 'react';
import PropTypes from 'prop-types';
import './square.css';

const Square = ({ value, onClick, isWinning }) => (
  <button
    type="button"
    className={`square ${isWinning ? 'winning' : ''}`}
    onClick={onClick}
    data-testid="square"
  >
    {value}
  </button>
);

Square.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isWinning: PropTypes.bool.isRequired,
};

export default Square;
