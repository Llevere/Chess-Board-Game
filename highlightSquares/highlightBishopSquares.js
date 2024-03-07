function highlightBishopSquares(position) {
  const fromTileLocation = tileLocator(position);
  const fromColour = position.classList[3][0];

  // Highlight squares diagonally: down-right
  let row = fromTileLocation.row + 1;
  for (
    let column = fromTileLocation.column + 1;
    column <= 8 && row <= 8;
    column++, row++
  ) {
    const square = document.getElementById(`${column}${row}`);
    if (!square.children.length) {
      square.classList.add("hint");
    } else {
      // Check if there are children elements in the square
      if (square.children.length > 0) {
        // Access the first character of the fourth class
        if (square.classList[3][0] !== fromColour) {
          square.classList.add("attack");
        }
      }
      break; // Stop when a piece is encountered
    }
  }

  // Highlight squares diagonally: down-left
  row = fromTileLocation.row + 1;
  for (
    let column = fromTileLocation.column - 1;
    column >= 1 && row <= 8;
    column--, row++
  ) {
    const square = document.getElementById(`${column}${row}`);
    if (!square.children.length) {
      square.classList.add("hint");
    } else {
      // Check if there are children elements in the square
      if (square.children.length > 0) {
        if (square.classList[3][0] !== fromColour) {
          square.classList.add("attack");
        }
      }
      break; // Stop when a piece is encountered
    }
  }

  // Highlight squares diagonally: up-right
  row = fromTileLocation.row - 1;
  for (
    let column = fromTileLocation.column + 1;
    column <= 8 && row >= 1;
    column++, row--
  ) {
    const square = document.getElementById(`${column}${row}`);
    if (!square.children.length) {
      square.classList.add("hint");
    } else {
      // Check if there are children elements in the square
      if (square.children.length > 0) {
        // Access the first character of the fourth class
        if (square.classList[3][0] !== fromColour) {
          square.classList.add("attack");
        }
      }
      break; // Stop when a piece is encountered
    }
  }

  // Highlight squares diagonally: up-left
  row = fromTileLocation.row - 1;
  for (
    let column = fromTileLocation.column - 1;
    column >= 1 && row >= 1;
    column--, row--
  ) {
    const square = document.getElementById(`${column}${row}`);
    if (!square.children.length) {
      square.classList.add("hint");
    } else {
      // Check if there are children elements in the square
      if (square.children.length > 0) {
        // Access the first character of the fourth class
        if (square.classList[3][0] !== fromColour) {
          square.classList.add("attack");
        }
      }
      break; // Stop when a piece is encountered
    }
  }
}
