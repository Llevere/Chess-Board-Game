// This function was simplified using chat gpt. Reduced quite a lof of if statements
function isKnightTakingKing(position) {
  const fromTileLocation = tileLocator(position);
  const fromColour = position.classList[3][0];

  // All the moves the knight can make
  const knightMoves = [
    { row: -2, column: -1 },
    { row: -2, column: 1 },
    { row: -1, column: -2 },
    { row: -1, column: 2 },
    { row: 1, column: -2 },
    { row: 1, column: 2 },
    { row: 2, column: -1 },
    { row: 2, column: 1 },
  ];

  for (let moveTo of knightMoves) {
    const newRow = fromTileLocation.row + moveTo.row;
    const newColumn = fromTileLocation.column + moveTo.column;

    // Check if the new square is within the board boundaries
    if (newRow >= 1 && newRow <= 8 && newColumn >= 1 && newColumn <= 8) {
      const square = document.getElementById(`${newColumn}${newRow}`);

      // Check if the square is empty or contains an opponent's piece
      if (!square.children.length) {
        square.classList.add("hint");
      } else {
        if (square.classList[3][0] !== fromColour) {
          square.classList.add("attack");
        }
      }
    }
  }
}
