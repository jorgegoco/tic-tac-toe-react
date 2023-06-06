import React, { useState } from 'react';
import calculateWinner from '../helpers';
import Board from './Board';
import './game.css';

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(history[stepNumber]);
  const winningSquares = winner ? calculateWinner(history[stepNumber]).winningSquares : [];
  const handleClick = (i) => {
    const timeInHistory = history.slice(0, stepNumber + 1);
    const current = timeInHistory[stepNumber];
    const squares = [...current];
    // If user clicks an occupied square or if game is won, return
    if (winner || squares[i]) return;
    // Put an X or an O in the clicked square
    squares[i] = xIsNext ? 'X' : 'O';
    setHistory([...timeInHistory, squares]);
    setXIsNext(!xIsNext);
    setStepNumber(timeInHistory.length);
  };

  const jumpTo = (step) => {
    if (step === 0) {
      // If step is 0, reset history, stepNumber, and xIsNext
      setHistory([Array(9).fill(null)]);
      setStepNumber(0);
      setXIsNext(true);
    } else {
      // Otherwise, update stepNumber and xIsNext based on the selected step
      setStepNumber(step);
      setXIsNext(step % 2 === 0);
    }
  };

  const renderMoves = () => (
    <ul className="game-moves">
      {history.map((_step, move) => {
        const destination = move ? `Go to move #${move}` : 'Go to start';
        return (
          // eslint-disable-next-line react/no-array-index-key
          <li key={move}>
            <button type="button" onClick={() => jumpTo(move)}>{destination}</button>
          </li>
        );
      })}
    </ul>
  );

  return (
    <div className="game">
      <h1 className="game-header">Tic Tac Toe</h1>
      <Board
        squares={history[stepNumber]}
        winningSquares={winningSquares}
        onClick={(i) => handleClick(i)}
      />
      <div>
        <p className="game-status">
          {winner
            ? `Winner: ${winner.winner}`
            : `Next Player: ${xIsNext ? 'X' : 'O'}`}
        </p>
        {renderMoves()}
      </div>
    </div>
  );
};

export default Game;
