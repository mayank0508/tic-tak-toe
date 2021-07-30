export const calculateWinner = square => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]; // we are destructuring the arrays here that
    //will make it very easy to access these values
    if (square[a] && square[a] === square[b] && square[a] === square[c]) {
      // here square[a] && square[a] check
      //that is the input being given or not, its a boolean value
      return square[a];
    }
  }
  return null;
};


const square = [
    null, null, null,
    'x', 'x', 'y',
    null, null, null
]

console.log(calculateWinner(square))