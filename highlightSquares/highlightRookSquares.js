function highlightRookSquares(position) {
  const fromTileLocation = tileLocator(position);
  const fromColour = position.classList[3][0];

  //Check all columns within the same row to the right of the rook
  for (let i = fromTileLocation.column + 1; i < 9; i++) {
    if (
      !(
        document.getElementById(`${i}${fromTileLocation.row}`).children.length >
        0
      )
    ) {
      document
        .getElementById(`${i}${fromTileLocation.row}`)
        .classList.add("hint");
    }
    if (
      document.getElementById(`${i}${fromTileLocation.row}`).children.length > 0
    ) {
      if (
        document.getElementById(`${i}${fromTileLocation.row}`)
          .classList[3][0] !== fromColour
      ) {
        document
          .getElementById(`${i}${fromTileLocation.row}`)
          .classList.add("attack");
      }
      break;
    }
  }

  //Check all columns within the same row to the left of the rook
  for (let i = fromTileLocation.row; i > 0; i--) {}

  //Check all columns within the same row to the right of the rook
  for (let i = fromTileLocation.column; i < 9; i++) {}

  //Check all columns within the same row to the right of the rook
  for (let i = fromTileLocation.column; i > 0; i--) {}
}
