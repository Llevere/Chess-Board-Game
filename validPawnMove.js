function isValidPawnMove(fromSquare, toSquare) {
  /*
  Pawn rule:
    Can move two squares vertically if it has not initially moved yet.
    Can move diagonally only to take a chess piece of another colour.
    Can only move one square vertically if it has already moved from its initial position.
  */

  const fromTileLocation = tileLocator(fromSquare);
  const toTileLocation = tileLocator(toSquare);

  if (
    fromTileLocation.column - toTileLocation.column > 2 ||
    toTileLocation.column - fromTileLocation.column > 2 ||
    fromTileLocation.row - toTileLocation.row > 2 ||
    toTileLocation.row - fromTileLocation.row > 2
  )
    return false;
  if (fromTileLocation.row === toTileLocation.row) {
    console.log("Pawn tring to move left or right, returning false");
    return false;
  }
  if (
    fromTileLocation.column === toTileLocation.column &&
    !fromSquare.classList.contains("start") &&
    (fromTileLocation.row - toTileLocation.row === 2 ||
      toTileLocation.row - fromTileLocation.row === 2)
  ) {
    console.log("Trying to move two squares vertically without 'start");
    return false;
  }

  if (fromTileLocation.column === toTileLocation.column) {
    if (
      fromTileLocation.row - toTileLocation.row > 1 ||
      toTileLocation.row - fromTileLocation.row > 1
    ) {
      if (fromSquare.classList.contains("start")) {
        //Pawns initial move, moving 2 squares
        //White Pawn
        if (fromSquare.classList[3][0] === "W") {
          if (
            document.getElementById(
              `${toTileLocation.column}${toTileLocation.row + 1}`
            ).children.length > 0 ||
            document.getElementById(
              `${toTileLocation.column}${toTileLocation.row}`
            ).children.length > 0
          ) {
            console.log(
              "A chess piece is within the white pawns route. Invalid move for going straight"
            );
            return false;
          }
          return true;
        }
        //Black Pawn
        else if (fromSquare.classList[3][0] === "B") {
          if (
            document.getElementById(
              `${toTileLocation.column}${toTileLocation.row - 1}`
            ).children.length > 0 ||
            document.getElementById(
              `${toTileLocation.column}${toTileLocation.row}`
            ).children.length > 0
          ) {
            console.log(
              "A chess piece is within the black pawns route. Invalid move for going straight"
            );
            return false;
          }

          return true;
        }
      }
      console.log("Returning false, line 393");
      return false;
    }

    console.log("Moving one square");
    /* Check to see if the pawn is moving backwards */
    if (fromSquare.classList[3][0] === "B") {
      console.log(
        "Checking black pawn movement: ",
        fromTileLocation.row - toTileLocation.row
      );
      if (fromTileLocation.row - toTileLocation.row > 0) {
        console.log("Going backwards with the black pawn. Invalid.");
        return false;
      }
    } else if (fromSquare.classList[3][0] === "W") {
      console.log(
        "Checking white pawn movement: ",
        toTileLocation.row - fromTileLocation.row
      );
      if (toTileLocation.row - fromTileLocation.row > 0) {
        console.log("Going backwards with the white pawn. Invalid.");
        return false;
      }
    }

    //Moving forward, can't take a pieces place.
    if (
      document.getElementById(`${toTileLocation.column}${toTileLocation.row}`)
        .children.length > 0
    ) {
      console.log("Trying to take a piece right in front of it. Invalid.");
      return false;
    }

    //No piece found within onee square, valid move.
    return true;
  }

  //Check for diagonal pieces

  //Black pawn
  if (fromSquare.classList[3][0] === "B") {
    console.log(
      "Black pawn: ",
      toTileLocation.row - fromTileLocation.row,
      fromTileLocation.row - toTileLocation.row
    );
    if (
      /*Going backwards */ toTileLocation.row - fromTileLocation.row < 0 ||
      fromTileLocation.row - toTileLocation.row > 1
    ) {
      console.log(
        "Trying to move more than one square diagonally or going backwards, invalid."
      );
      return false;
    }
  }
  if (fromSquare.classList[3][0] === "W") {
    if (
      toTileLocation.row - fromTileLocation.row > 1 ||
      /*Going backwards */ fromTileLocation.row - toTileLocation.row < 0
    ) {
      console.log(
        "Trying to move more than one square diagonally or going backwards, invalid."
      );
      return false;
    }
  }

  return true;
}
