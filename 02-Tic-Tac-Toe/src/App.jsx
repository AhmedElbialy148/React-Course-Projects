import { useState } from 'react';
import Player from './components/Player';
import GameBoard from './components/GameBoard';
import Log from './components/Log';
import GameOver from './components/GameOver';

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveGameBoard(gameTurns) {
  let gameBoard = [...initialGameBoard.map((row) => [...row])];
  for (let turn of gameTurns) {
    gameBoard[turn.sqare.row][turn.sqare.col] = turn.player;
  }
  return gameBoard;
}

function checkWin(gameBoard) {
  // check rows
  for (let i = 0; i < 3; i++) {
    if (
      gameBoard[i][0] !== null &&
      gameBoard[i][0] === gameBoard[i][1] &&
      gameBoard[i][1] === gameBoard[i][2]
    ) {
      return true;
    }
  }
  // check columns
  for (let i = 0; i < 3; i++) {
    if (
      gameBoard[0][i] !== null &&
      gameBoard[0][i] === gameBoard[1][i] &&
      gameBoard[1][i] === gameBoard[2][i]
    ) {
      return true;
    }
  }
  // check diaginals
  if (
    (gameBoard[0][0] === gameBoard[1][1] &&
      gameBoard[1][1] === gameBoard[2][2] &&
      gameBoard[1][1] !== null) ||
    (gameBoard[0][2] === gameBoard[1][1] &&
      gameBoard[1][1] === gameBoard[2][0] &&
      gameBoard[1][1] !== null)
  ) {
    return true;
  }
  return false;
}

function deriveActivePlayer(gameTurnsArr) {
  let activePlayer = 'X';
  if (gameTurnsArr.length > 0 && gameTurnsArr[0].player === 'X')
    activePlayer = 'O';
  return activePlayer;
}

function App() {
  const [players, setPlayers] = useState({ X: 'Player 1', O: 'Player 2' });
  const [gameTurns, setGameTurns] = useState([]);
  let activePlayer = deriveActivePlayer(gameTurns);

  // Create the gameBoard in form of array of arrays
  let gameBoard = deriveGameBoard(gameTurns);

  // Check if game is won
  let isWin = checkWin(gameBoard);
  let winner = undefined;
  if (isWin) {
    let winnerSymbol = gameTurns[0].player;
    winner = players[winnerSymbol];
    activePlayer = gameTurns[0].player;
  }

  // Check if game is draw
  let isDraw = gameTurns.length === 9 && !isWin;

  function handleSelectSqare(rowIndex, colIndex) {
    // Get the current player
    const currentPlayer = deriveActivePlayer(gameTurns);

    // Update the game board and logs
    setGameTurns((gameTurns) => {
      const updatedGameTurns = [
        { player: currentPlayer, sqare: { row: rowIndex, col: colIndex } },
        ...gameTurns,
      ];

      return updatedGameTurns;
    });
  }

  function handleRestart() {
    setGameTurns([]);
  }

  function handlePlayerNameChange(symbol, newName) {
    setPlayers((players) => {
      return {
        ...players,
        [symbol]: newName,
      };
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initailName="Player 1"
            symbol="X"
            isActive={activePlayer === 'X'}
            onNameChange={handlePlayerNameChange}
          />
          <Player
            initailName="Player 2"
            symbol="O"
            isActive={activePlayer === 'O'}
            onNameChange={handlePlayerNameChange}
          />
        </ol>
        {(isWin || isDraw) && (
          <GameOver winner={winner} onRestart={handleRestart} />
        )}
        <GameBoard onSelectSqare={handleSelectSqare} gameBoard={gameBoard} />
      </div>
      <Log gameTurnsArr={gameTurns} />
    </main>
  );
}

export default App;
