# Tic-Tac-Toe-Game
This is a simple Tic Tac Toe game built using React and JavaScript. The app allows players to switch between light and dark mode and features a glow effect to highlight the winning squares.


Features
Two-player game: Play as "X" and "O" in turn.
Winning logic: Detects when a player has won or if the game is a draw.
Light/Dark Mode: Toggle between light and dark themes.
Glow effect: The winning squares are highlighted with a glowing effect.
Scoreboard: Keeps track of scores for both players.

Project Structure
Copy code
/tic-tac-toe
│
├── /public
│   └── index.html
│
├── /src
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   ├── Board.js
│   └── Square.js
│
└── README.md


Key Files:
App.js: The main component that handles game state, including the board layout, player turns, and light/dark mode toggling.
Board.js: Handles the game board layout and logic for updating the board.
Square.js: Represents each square on the board.
App.css: Contains all styling, including the light and dark modes and the glow effect for winning squares.
