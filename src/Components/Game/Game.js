import React, { useState } from 'react';
import Board from '../Board/Board';
import { calculateWinner } from '../../helper';
import { Gamestyle } from './Game.styles';
import { ButtonStyle } from './Button.style';

//Hooks
const Game = () => {
  // const [board, setBoard] = useState(Array(9).fill(null)); // this means that there is a state which is a array but it is currently empty
  // the way we destructure the arrays are using the ES6 format.

  const [history, setHistory] = useState([Array(9).fill(null)]); // here we are chaneing the board to history cause now we will
  //add the time jump function init, and then put the useState in [Array(9).fill(null)], because there will be more than one array init

  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(history[stepNumber]); // this const tells us that
  // this particular move is a winning move not by using the calculateWinner algo, and it also
  // tells us that the particular move stepNumber and also the most recent step

  const handleClick = i => {
    const timeInHistory = history.slice(0, stepNumber + 1); // slice is used here to take the array from a array and then put some selected elements of that array in a new one
    const current = timeInHistory[stepNumber]; // it gives the most current move

    const squares = [...current];

    // const boardCopy = [...board]; //here we are copying the data of the board, but in every case
    //its not the case as cant be applicable to nested arrays

    // if user click on a occupied box or the user has won the game, then just return
    if (winner || squares[i]) return;
    // put a x or a o in a paricular clicked square
    // boardCopy[i] = xIsNext ? 'X' : 'O'; //here what we are doing is that acces the array using the i and then to let add X or O.

    squares[i] = xIsNext ? 'X' : 'O';
    setHistory([...timeInHistory, squares]); // as we know what does ...timeInHistory anf squares means.
    setStepNumber(timeInHistory.length); //  it will give us the step number of the array

    // setBoard(boardCopy); // here in the setboard we are passing the [...board] that we made a copy of
    setXisNext(!xIsNext); // and then here we put setxIsNext to false, ie its O now !!
  };

  const jumpTo = step => {
    setStepNumber(step);
    setXisNext(step % 2 === 0);
  };

  const renderMove = () =>
    history.map((_step, move) => {
      const destination = move ? `Go to move # ${move}` : `Reset the Game 🚀`;
      return (
        <ul key={move}>
          <ButtonStyle onClick={() => jumpTo(move)}>{destination}</ButtonStyle>
          {/* <ButtonStyle onClick={() => setBoard(Array(9).fill(null))}> */}{' '}
          {/* here what we are doing is to setBoard to and array of 9 which is unfilled*/}
        </ul>
      );
    });

  return (
    <>
      {' '}
      {/* we use fragments when we dont want to render an element like div
    and we make a fragment here beacuse only one element can be returned in your JSX
    */}
      <Board square={history[stepNumber]} onClick={handleClick} />
      <Gamestyle>
        <p>
          {winner
            ? 'Winner: ' + winner
            : 'Next Player: ' + (xIsNext ? 'X' : 'O')}
        </p>{' '}
        {/* here we are using the curly brackets beacuse in side the JSX we can only 
        use the JS in side those brackets */}
        {/* here we are using so many ternary operators because */}
        {renderMove()}
      </Gamestyle>
    </>
  );
};

export default Game;
