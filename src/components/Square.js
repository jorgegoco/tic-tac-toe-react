import React from 'react';
import PropTypes from 'prop-types';
import './square.css';

const Square = ({ value, onClick, isWinning }) => (
  <button className={`square ${isWinning ? 'winning' : ''}`} type="button" onClick={onClick}>
    {value}
  </button>
);

Square.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isWinning: PropTypes.bool.isRequired,
};

export default Square;
