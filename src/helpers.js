const calculateWinner = (squares) => {
  // All possible winning combinations
  const lines = [
    [0, 1, 2], // top row
    [3, 4, 5], // middle row
    [6, 7, 8], // bottom row
    [0, 3, 6], // left column
    [1, 4, 7], // middle column
    [2, 5, 8], // right column
    [0, 4, 8], // diagonal top left to bottom right
    [2, 4, 6], // diagonal top right to bottom left
  ];

  // Loop through all possible winning combinations
  for (let i = 0; i < lines.length; i += 1) {
    // Destructure the winning combination
    const [a, b, c] = lines[i];

    // Check if the squares array has a value for each of the winning combinations
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      // Return an object with the winner (X or O) and the winning squares
      return {
        winner: squares[a],
        winningSquares: [a, b, c],
      };
    }
  }

  // If there is no winner, return null
  return null;
};

export default calculateWinner;
