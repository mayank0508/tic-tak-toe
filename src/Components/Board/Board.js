import React from 'react';
import Sqaure from '../Sqaure/Sqaure';
import { BoardStyle } from './Board.styles';

function Board({ square, onClick }) {
  return ( //  here we are displaying a square with 9 boxes as it was declare in Game components
    <BoardStyle>  
      {square.map((square, i) => (
        <Sqaure key={i} value={square} onClick={() => onClick(i)} /> // this has the imported Square function
      ))}
    </BoardStyle>
  );
}

export default Board;
