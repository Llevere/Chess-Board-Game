function isValidQueenMove(fromSquare, toSquare) {
  const fromTileLocation = tileLocator(fromSquare);
  const toTileLocation = tileLocator(toSquare);

  /* 
  Queen rule set:
  Can move 1 square all around like a King.
  Can move like a Rook and Bishop
  */

  const rowDiff = Math.abs(toTileLocation.row - fromTileLocation.row);
  const colDiff = Math.abs(toTileLocation.column - fromTileLocation.column);

  //King Move
  if (
    (fromTileLocation.column - toTileLocation.column === 1 ||
      toTileLocation.column - fromTileLocation.column === 1) &&
    (fromTileLocation.row - toTileLocation.row === 1 ||
      toTileLocation.row - fromTileLocation.row === 1)
  ) {
    // console.log("Queen is moving one square. Valid move.");
    // console.log(
    //   (fromTileLocation.column - toTileLocation.column === 1 ||
    //     toTileLocation.column - fromTileLocation.column === 1) &&
    //     (fromTileLocation.row - toTileLocation.row === 1 ||
    //       toTileLocation.row - fromTileLocation.row === 1)
    // );
    return true;
  }

  //Rook Move
  /* Same Column */
  if (fromTileLocation.column === toTileLocation.column) {
    let pieceFound = false;
    if (fromTileLocation.row > toTileLocation.row) {
      // Rook is moving up
      //console.log("Queen moving up");
      for (let i = fromTileLocation.row - 1; i >= toTileLocation.row; i--) {
        if (
          document.getElementById(`${fromTileLocation.column}${i}`).children
            .length > 0
        ) {
          if (i === toTileLocation.row) {
            return true;
          }
          pieceFound = true;
          break;
        }
      }
    } else {
      // Rook is moving down
      //console.log("Queen moving down");
      for (let i = fromTileLocation.row + 1; i <= toTileLocation.row; i++) {
        if (
          document.getElementById(`${fromTileLocation.column}${i}`).children
            .length > 0
        ) {
          if (i === toTileLocation.row) {
            return true;
          }
          pieceFound = true;
          break;
        }
      }
    }
    if (!pieceFound) {
      //console.log("No chess piece found, rook can move to location.");
      return true;
    }
  } else if (fromTileLocation.row === toTileLocation.row) {
    /* Same Row */
    let pieceFound = false;
    if (fromTileLocation.column > toTileLocation.column) {
      // Rook is moving left
      //console.log("Queen moving left");
      for (
        let i = fromTileLocation.column - 1;
        i >= toTileLocation.column;
        i--
      ) {
        //Check column : row to see if the square has an image (filled square)
        if (
          document.getElementById(`${i}${fromTileLocation.row}`).children
            .length > 0
        ) {
          if (i === toTileLocation.column) {
            return true;
          }
          pieceFound = true;
          break;
        }
      }
    } else {
      // Rook is moving right
      //  console.log("Queen moving right");
      for (
        let i = fromTileLocation.column + 1;
        i <= toTileLocation.column;
        i++
      ) {
        //Check column : row to see if the square has an image (filled square)
        if (
          document.getElementById(`${i}${fromTileLocation.row}`).children
            .length > 0
        ) {
          if (i === toTileLocation.column) {
            return true;
          }
          pieceFound = true;
          break;
        }
      }
    }
    if (!pieceFound) {
      return true;
    }
  }
  //Valid diagonal move
  else if (rowDiff === colDiff) {
    // console.log("Valid diagonal move for the queen");

    // Check for obstructions along the diagonal path
    const rowIncrement = toTileLocation.row > fromTileLocation.row ? 1 : -1;
    const colIncrement =
      toTileLocation.column > fromTileLocation.column ? 1 : -1;

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
        //console.log("Invalid queen movement: piece found");
        return false;
      }

      // Move to the next diagonal square
      currentRow += rowIncrement;
      currentCol += colIncrement;
    }

    //console.log("Valid queen diagonal movement");
    return true;
  }
  //Diagonal Move

  return false;
}
