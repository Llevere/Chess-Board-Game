// function isValidBishopMove(fromSquare, toSquare) {
//   const fromTileLocation = tileLocator(fromSquare);
//   const toTileLocation = tileLocator(toSquare);

//   //Moving up and right of the board
//   if (
//     fromTileLocation.column > toTileLocation.column &&
//     fromTileLocation.row > toTileLocation.row
//   ) {
//     console.log("Moving up and left");
//   }
//   //Moving down and right
//   if (
//     fromTileLocation.column < toTileLocation.column &&
//     fromTileLocation.row < toTileLocation.row
//   ) {
//     console.log("Moving down and right");
//   }

//   if (
//     fromTileLocation.column < toTileLocation.column &&
//     fromTileLocation.row > toTileLocation.row
//   ) {
//     console.log("Moving up and right");
//   }
//   if (
//     fromTileLocation.column > toTileLocation.column &&
//     fromTileLocation.row < toTileLocation.row
//   ) {
//     console.log("Moving down and left");
//   }

//   return true;
// }

function isValidBishopMove(fromSquare, toSquare) {
  const fromTileLocation = tileLocator(fromSquare);
  const toTileLocation = tileLocator(toSquare);

  // Check if the movement is diagonal
  const rowDiff = Math.abs(toTileLocation.row - fromTileLocation.row);
  const colDiff = Math.abs(toTileLocation.column - fromTileLocation.column);

  // Ensure that the row and column differences are the same for diagonal movement
  if (rowDiff !== colDiff) {
    console.log("Invalid bishop movement: not diagonal");
    return false;
  }

  // Check for obstructions along the diagonal path
  const rowIncrement = toTileLocation.row > fromTileLocation.row ? 1 : -1;
  const colIncrement = toTileLocation.column > fromTileLocation.column ? 1 : -1;

  let currentRow = fromTileLocation.row + rowIncrement;
  let currentCol = fromTileLocation.column + colIncrement;

  while (
    currentRow !== toTileLocation.row &&
    currentCol !== toTileLocation.column
  ) {
    // Check if the intermediate square is occupied
    const intermediateSquare = document.getElementById(
      `${currentCol}${currentRow}`
    );
    if (intermediateSquare.children.length > 0) {
      console.log("Invalid bishop movement: piece found");
      return false;
    }

    // Move to the next diagonal square
    currentRow += rowIncrement;
    currentCol += colIncrement;
  }

  console.log("Valid bishop movement");
  return true;
}
