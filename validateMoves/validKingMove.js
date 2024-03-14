function isValidKingMove(fromSquare, toSquare) {
  const fromTileLocation = tileLocator(fromSquare);
  const toTileLocation = tileLocator(toSquare);

  if (
    fromTileLocation.column - toTileLocation.column > 1 ||
    toTileLocation.column - fromTileLocation.column > 1 ||
    fromTileLocation.row - toTileLocation.row > 1 ||
    toTileLocation.row - fromTileLocation.row > 1
  ) {
    // console.log("King trying to move more than one space, invalid move.");
    return false;
  }

  // console.log("King Move - Valid swap.");
  return true;
}
