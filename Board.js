import React, { useState, useEffect } from 'react';
import Square from './Square';

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [xScore, setXScore] = useState(0);
  const [oScore, setOScore] = useState(0);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    const newWinner = calculateWinner(squares);
    if (newWinner && !winner) {
      setWinner(newWinner);
      // Update score when a winner is found
      if (newWinner === 'X') {
        setXScore((prevScore) => prevScore + 1);
      } else if (newWinner === 'O') {
        setOScore((prevScore) => prevScore + 1);
      }
    }
  }, [squares, winner]);

  const handleClick = (i) => {
    if (squares[i] || winner) return;
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  };

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
    setWinner(null); // Reset the winner
  };

  const renderSquare = (i) => {
    return <Square value={squares[i]} onClick={() => handleClick(i)} />;
  };

  return (
    <div>
      <h3>{winner ? `Congratulations ${winner}! You win!` : `Next Player: ${xIsNext ? 'X' : 'O'}`}</h3>
      <div className="board-row">
        {renderSquare(0)} {renderSquare(1)} {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)} {renderSquare(4)} {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)} {renderSquare(7)} {renderSquare(8)}
      </div>
      <button className="reset-button" onClick={resetGame}>Reset Game</button>
      <div className="scoreboard">
        <h3>Scoreboard</h3>
        <p>X: {xScore} - O: {oScore}</p>
      </div>
    </div>
  );
};

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default Board;
