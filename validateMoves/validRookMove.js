function isValidRookMove(fromSquare, toSquare) {
  const fromTileLocation = tileLocator(fromSquare);
  const toTileLocation = tileLocator(toSquare);

  /* Same Column */
  if (fromTileLocation.column === toTileLocation.column) {
    let pieceFound = false;
    if (fromTileLocation.row > toTileLocation.row) {
      // Rook is moving up
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
      console.log("Rook moving left");
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
          console.log(
            "Checking: " + i,
            toTileLocation.column,
            fromTileLocation.column
          );
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
  } else {
    return false; // Invalid move
  }
}
