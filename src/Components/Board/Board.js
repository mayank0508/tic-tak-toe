import React from 'react';
import Sqaure from '../Sqaure/Sqaure';
import { BoardStyle } from './Board.styles';

function Board({ square, onClick }) {
  return (
    <BoardStyle>
      <Sqaure onClick={() => onClick('Dummy')} />
      <Sqaure onClick={() => onClick('Dummy')} />
      <Sqaure onClick={() => onClick('Dummy')} />
      <Sqaure onClick={() => onClick('Dummy')} />
      <Sqaure onClick={() => onClick('Dummy')} />
      <Sqaure onClick={() => onClick('Dummy')} />
      <Sqaure onClick={() => onClick('Dummy')} />
      <Sqaure onClick={() => onClick('Dummy')} />
      <Sqaure onClick={() => onClick('Dummy')} />
    </BoardStyle>
  );
}

export default Board;
