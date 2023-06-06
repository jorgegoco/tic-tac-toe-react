import calculateWinner from '../helpers';

describe('calculateWinner', () => {
  it('should return null for an empty board', () => {
    const squares = Array(9).fill(null);
    expect(calculateWinner(squares)).toBeNull();
  });

  it('should detect a horizontal win', () => {
    const squares = ['X', 'X', 'X', null, null, null, null, null, null];
    expect(calculateWinner(squares)).toEqual({
      winner: 'X',
      winningSquares: [0, 1, 2],
    });
  });

  it('should detect a vertical win', () => {
    const squares = ['O', null, null, 'O', null, null, 'O', null, null];
    expect(calculateWinner(squares)).toEqual({
      winner: 'O',
      winningSquares: [0, 3, 6],
    });
  });

  it('should detect a diagonal win', () => {
    const squares = [null, null, 'X', null, 'X', null, 'X', null, null];
    expect(calculateWinner(squares)).toEqual({
      winner: 'X',
      winningSquares: [2, 4, 6],
    });
  });

  it('should return null if there is no winner', () => {
    const squares = ['X', 'O', 'X', 'O', 'X', 'O', 'O', 'X', 'O'];
    expect(calculateWinner(squares)).toBeNull();
  });
});
