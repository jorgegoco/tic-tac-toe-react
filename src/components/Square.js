import React from 'react';
import PropTypes from 'prop-types';
import './square.css';

const Square = ({ value = '', onClick, isWinning }) => (
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
  value: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  isWinning: PropTypes.bool.isRequired,
};

Square.defaultProps = {
  value: '',
};

export default Square;
