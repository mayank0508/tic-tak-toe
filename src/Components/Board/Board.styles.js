import styled from 'styled-components';

export const BoardStyle = styled.div`
  display: grid;
  grid-template-rows: 150px 150px 150px; // this is the code that helped in making the grid !!!
  grid-template-columns: 150px 150px 150px; // this is the code that helped in making the grid !!!
  border: 4px solid black;
  border-radius: 10px;
  width: 450px;
  height: 450px;
  justify-content: center;
  align-content: center;
  margin-top: 100px;
  margin-bottom: 100px;
  margin-left: auto;
  margin-right: auto;
  

`;
