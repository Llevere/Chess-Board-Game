function isValidKnightMove(fromSquare, toSquare) {
  /*
  Knight rule:
    Can only move in an L shape, but in any direction

    Having the ability to move in any direction,
    there is no point to check for chess piece colour
    unless they're taking a chess piece
  */

  const fromTileLocation = tileLocator(fromSquare);
  const toTileLocation = tileLocator(toSquare);

  const fromSquareColour = document.getElementById(
    `${fromTileLocation.column}${fromTileLocation.row}`
  ).classList[3][0];

  if (
    fromTileLocation.column === toTileLocation.column ||
    fromTileLocation.row === toTileLocation.row
  ) {
    console.log("Trying to move in the same column or row, invalid move.");
    return false;
  }

  //Moving up

  //Move to the left of the board
  if (
    fromTileLocation.column - 1 === toTileLocation.column &&
    fromTileLocation.row - toTileLocation.row === 2
  ) {
    console.log("Knight move - Moving two squares up, one to the left.");

    if (
      (document.getElementById(`${toTileLocation.column}${toTileLocation.row}`)
        .children.length > 0 &&
        toSquare.classList.length > 2 &&
        document.getElementById(`${toTileLocation.column}${toTileLocation.row}`)
          .classList[3][0] !== fromSquareColour) ||
      document.getElementById(`${toTileLocation.column}${toTileLocation.row}`)
        .children.length === 0
    ) {
      console.log("Taking a different colour chess piece");
      return true;
    }
    console.log(
      "Either trying to take a same colour chess piece, or something else happened. Line 48"
    );
    return false;
  }
  //Move to the right of the board
  if (
    toTileLocation.column - 1 === fromTileLocation.column &&
    fromTileLocation.row - toTileLocation.row === 2
  ) {
    console.log("Knight move - Moving two squares up, one to the right.");

    if (
      (document.getElementById(`${toTileLocation.column}${toTileLocation.row}`)
        .children.length > 0 &&
        document.getElementById(`${toTileLocation.column}${toTileLocation.row}`)
          .classList[3][0] !== fromSquareColour) ||
      document.getElementById(`${toTileLocation.column}${toTileLocation.row}`)
        .children.length === 0
    ) {
      console.log("Taking a different colour chess piece");
      return true;
    }
    console.log(
      "Either trying to take a same colour chess piece, or something else happened. Line 67"
    );
    return false;
  }

  //Moving right
  //   console.log(
  //     "From tile: " + fromTileLocation.column,
  //     fromTileLocation.row + ". To Tile: " + toTileLocation.column,
  //     toTileLocation.column
  //   );
  //   console.log(
  //     "Move to the right: " + fromTileLocation.row + 1 === toTileLocation.row,
  //     toTileLocation.column - fromTileLocation.column === 2
  //   );
  //Moving down on the board
  if (
    fromTileLocation.row + 1 === toTileLocation.row &&
    toTileLocation.column - fromTileLocation.column === 2
  ) {
    console.log("Knight move - Moving two squares right, one down.");

    if (
      (document.getElementById(`${toTileLocation.column}${toTileLocation.row}`)
        .children.length > 0 &&
        toSquare.classList.length > 2 &&
        document.getElementById(`${toTileLocation.column}${toTileLocation.row}`)
          .classList[3][0] !== fromSquareColour) ||
      document.getElementById(`${toTileLocation.column}${toTileLocation.row}`)
        .children.length === 0
    ) {
      console.log("Taking a different colour chess piece");
      return true;
    }
    console.log(
      "Either trying to take a same colour chess piece, or something else happened. Line 90"
    );
    return false;
  }
  //Moving up on the board
  if (
    fromTileLocation.row - 1 === toTileLocation.row &&
    toTileLocation.column - fromTileLocation.column === 2
  ) {
    console.log("Knight move - Moving two squares right, one up.");

    if (
      (document.getElementById(`${toTileLocation.column}${toTileLocation.row}`)
        .children.length > 0 &&
        document.getElementById(`${toTileLocation.column}${toTileLocation.row}`)
          .classList[3][0] !== fromSquareColour) ||
      document.getElementById(`${toTileLocation.column}${toTileLocation.row}`)
        .children.length === 0
    ) {
      console.log("Taking a different colour chess piece");
      return true;
    }
    console.log(
      "Either trying to take a same colour chess piece, or something else happened. Line 109"
    );
    return false;
  }

  //Moving down

  //Move to the left of the board
  if (
    fromTileLocation.column - 1 === toTileLocation.column &&
    toTileLocation.row - fromTileLocation.row === 2
  ) {
    console.log("Knight move - Moving two squares down, one to the left.");

    if (
      (document.getElementById(`${toTileLocation.column}${toTileLocation.row}`)
        .children.length > 0 &&
        toSquare.classList.length > 2 &&
        document.getElementById(`${toTileLocation.column}${toTileLocation.row}`)
          .classList[3][0] !== fromSquareColour) ||
      document.getElementById(`${toTileLocation.column}${toTileLocation.row}`)
        .children.length === 0
    ) {
      console.log("Taking a different colour chess piece");
      return true;
    }
    console.log(
      "Either trying to take a same colour chess piece, or something else happened. Line 136"
    );
    return false;
  }
  //Move to the right of the board
  if (
    toTileLocation.column - 1 === fromTileLocation.column &&
    toTileLocation.row - fromTileLocation.row === 2
  ) {
    console.log("Knight move - Moving two squares down, one to the right.");

    if (
      (document.getElementById(`${toTileLocation.column}${toTileLocation.row}`)
        .children.length > 0 &&
        document.getElementById(`${toTileLocation.column}${toTileLocation.row}`)
          .classList[3][0] !== fromSquareColour) ||
      document.getElementById(`${toTileLocation.column}${toTileLocation.row}`)
        .children.length === 0
    ) {
      console.log("Taking a different colour chess piece");
      return true;
    }
    console.log(
      "Either trying to take a same colour chess piece, or something else happened. Line 158"
    );
    return false;
  }

  //Moving left

  //Moving up on the board
  if (
    fromTileLocation.row - 1 === toTileLocation.row &&
    fromTileLocation.column - toTileLocation.column === 2
  ) {
    console.log("Knight move - Moving two squares right, one up.");

    if (
      (document.getElementById(`${toTileLocation.column}${toTileLocation.row}`)
        .children.length > 0 &&
        toSquare.classList.length > 2 &&
        document.getElementById(`${toTileLocation.column}${toTileLocation.row}`)
          .classList[3][0] !== fromSquareColour) ||
      document.getElementById(`${toTileLocation.column}${toTileLocation.row}`)
        .children.length === 0
    ) {
      console.log("Taking a different colour chess piece");
      return true;
    }
    console.log(
      "Either trying to take a same colour chess piece, or something else happened. Line 184"
    );
    return false;
  }
  //Moving down on the board
  if (
    fromTileLocation.row + 1 === toTileLocation.row &&
    fromTileLocation.column - toTileLocation.column === 2
  ) {
    console.log("Knight move - Moving two squares right, one down.");

    if (
      (document.getElementById(`${toTileLocation.column}${toTileLocation.row}`)
        .children.length > 0 &&
        document.getElementById(`${toTileLocation.column}${toTileLocation.row}`)
          .classList[3][0] !== fromSquareColour) ||
      document.getElementById(`${toTileLocation.column}${toTileLocation.row}`)
        .children.length === 0
    ) {
      console.log("Taking a different colour chess piece");
      return true;
    }
    console.log(
      "Either trying to take a same colour chess piece, or something else happened. Line 207"
    );
    return false;
  }

  console.log("Returning false - Line 227");
  return false;
}
