import React, { useState } from 'react';
import Board from '../Board/Board';
import { calculateWinner } from '../../helper';
import { Gamestyle } from './Game.styles';

//Hooks
const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null)); // this means that there is a state which is a array but it is currently empty
  // the way we destructure the arrays are using the ES6 format.
  const [xIsNext, setxIsNext] = useState(true);
  const winners = calculateWinner(board); // thsi const tells us that this particular move is a winning move not

  const handleClick = i => {
    const boardCopy = [...board]; //here we are copying the data of the board, but in every case
    //its not the case as cant be applicable to nested arrays

    // if user click on a occupied box or the user has won the game, then just return
    if (winners || boardCopy[i]) return;
    // put a x or a o in a paricular clicked square
    boardCopy[i] = xIsNext ? 'X' : 'O'; //here what we are doing is that acces the array using the i and then to let add X or O.
    setBoard(boardCopy); // here in the setboard we are passing the [...board] that we made a copy of
    setxIsNext(!xIsNext); // and then here we put setxIsNext to false, ie its O now !!
  };

  const jumpTo = () => {};

  const renderMove = () => {};

  return (
    <>
      {' '}
      {/* we use fragments when we dont want to render an element like div
    and we make a fragment here beacuse only one element can be returned in your JSX
    */}
      <Board square={board} onClick={handleClick} />
      <Gamestyle>
        <p>{  }</p>{' '}
        {/* here we are using the curly brackets beacuse in side the JSX we can only 
        use the JS in side those brackets */}
      </Gamestyle>
    </>
  );
};

export default Game;
