import React, { useState } from 'react';
import Board from '../Board/Board';
import { calculateWinner } from '../../helper';

//Hooks
const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null)); // this means that there is a state which is a array but it is currently empty
  // the way we destructure the arrays are using the ES6 format.
  const [xIsNext, setxIsNext] = useState(true);
  const winners = calculateWinner(board); // thsi const tells us that this particular move is a winning move not

  const handleClick = () => {};

  const jumpTo = () => {};

  const renderMove = () => {};

  return <Board square={board} onClick={handleClick} />;
};

export default Game;
