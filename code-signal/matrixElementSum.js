/* eslint-disable no-unused-vars */
/*
Given matrix, a rectangular matrix of integers,
where each value represents the cost of the room,
your task is to return the total sum of all rooms
that are suitable for the CodeBots
(ie: add up all the values that don't appear below a 0).
*/

/*
create total var
loop through array by column
loop through array by row
if index is is equal to 0 move on to the next column
else
add to total
*/

function sumMatrixElements(matrix) {
  const foundZero = [];
  let total = 0;

  for (let i = 0; i < matrix[0].length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[j][i] === 0) break;
      else {
        total += matrix[j][i];
      }
    }
  }
  return total;
}
