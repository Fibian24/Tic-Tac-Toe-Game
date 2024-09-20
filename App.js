import React, { useState } from 'react';
import './App.css'; // Ensure you have the CSS file imported

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);

  const calculateWinner = (squares) => {
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
  };

const handleClick = (index) => {
  const squaresCopy = squares.slice();
  if (squaresCopy[index] || winner) return;
  
  squaresCopy[index] = isXNext ? 'X' : 'O';
  setSquares(squaresCopy);
  setIsXNext(!isXNext);
  
  // Instead of declaring winner again, just calculate and set
  const calculatedWinner = calculateWinner(squaresCopy);
  setWinner(calculatedWinner);
};

  const handleReset = () => {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <div className={`App ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <button className="dark-mode-toggle" onClick={toggleDarkMode}>
        Toggle Dark Mode
      </button>
      <div className="board">
        {squares.map((square, index) => (
          <button
            key={index}
            className={`square ${winner && square === winner ? 'winner' : ''}`}
            onClick={() => handleClick(index)}
          >
            {square}
          </button>
        ))}
      </div>
      {winner && <div className="winner-message">Winner: {winner}</div>}
      <button className="reset-button" onClick={handleReset}>Reset Game</button>
      <div className="scoreboard">
        {/* Add score display here if needed */}
      </div>
    </div>
  );
}

export default App;
