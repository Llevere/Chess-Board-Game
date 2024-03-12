// function isPawnTakingKing(position) {
//   const fromTileLocation = tileLocator(position);
//   const fromColour = position.classList[3][0];

//   if (fromColour === "W") {
//     //Up + Left
//     if (
//       fromTileLocation.column - 1 >= 1 &&
//       fromTileLocation.row - 1 >= 1 &&
//       document.getElementById(
//         `${fromTileLocation.column - 1}${fromTileLocation.row - 1}`
//       ).children.length > 0 &&
//       document.getElementById(
//         `${fromTileLocation.column - 1}${fromTileLocation.row - 1}`
//       ).classList[3][0] !== fromColour &&
//       (document.getElementById(`${i}${fromTileLocation.row}`).classList[3] ===
//         fromColour) ===
//         "W"
//         ? "Bking"
//         : "Wking"
//     ) {
//       document.getElementById(
//         `${i}${fromTileLocation.row}`
//       ).style.backgroundColor = "orange";
//       return true;
//     }
//     //Up + Right
//     if (
//       fromTileLocation.column + 1 <= 8 &&
//       fromTileLocation.row - 1 >= 1 &&
//       document.getElementById(
//         `${fromTileLocation.column + 1}${fromTileLocation.row - 1}`
//       ).children.length > 0 &&
//       document.getElementById(
//         `${fromTileLocation.column + 1}${fromTileLocation.row - 1}`
//       ).classList[3][0] !== fromColour &&
//       (document.getElementById(`${i}${fromTileLocation.row}`).classList[3] ===
//         fromColour) ===
//         "W"
//         ? "Bking"
//         : "Wking"
//     ) {
//       document.getElementById(
//         `${i}${fromTileLocation.row}`
//       ).style.backgroundColor = "orange";
//       return true;
//     }
//   } else if (fromColour === "B") {
//     //Down + Left
//     if (
//       fromTileLocation.column - 1 >= 1 &&
//       fromTileLocation.row + 1 <= 8 &&
//       document.getElementById(
//         `${fromTileLocation.column - 1}${fromTileLocation.row + 1}`
//       ).children.length > 0 &&
//       document.getElementById(
//         `${fromTileLocation.column - 1}${fromTileLocation.row + 1}`
//       ).classList[3][0] !== fromColour &&
//       (document.getElementById(`${i}${fromTileLocation.row}`).classList[3] ===
//         fromColour) ===
//         "W"
//         ? "Bking"
//         : "Wking"
//     ) {
//       document.getElementById(
//         `${i}${fromTileLocation.row}`
//       ).style.backgroundColor = "orange";
//       return true;
//     }
//     //Down + Right
//     if (
//       fromTileLocation.column + 1 <= 8 &&
//       fromTileLocation.row + 1 <= 8 &&
//       document.getElementById(
//         `${fromTileLocation.column + 1}${fromTileLocation.row + 1}`
//       ).children.length > 0 &&
//       document.getElementById(
//         `${fromTileLocation.column + 1}${fromTileLocation.row + 1}`
//       ).classList[3][0] !== fromColour &&
//       (document.getElementById(`${i}${fromTileLocation.row}`).classList[3] ===
//         fromColour) ===
//         "W"
//         ? "Bking"
//         : "Wking"
//     ) {
//       document.getElementById(
//         `${i}${fromTileLocation.row}`
//       ).style.backgroundColor = "orange";
//       return true;
//     }
//   }
// }
function isPawnTakingKing(position) {
  const fromTileLocation = tileLocator(position);
  const fromColour = position.classList[3][0];

  if (fromColour === "W") {
    // Check if the pawn can capture the king diagonally
    if (
      fromTileLocation.column - 1 >= 1 &&
      fromTileLocation.row - 1 >= 1 &&
      document
        .getElementById(
          `${fromTileLocation.column - 1}${fromTileLocation.row - 1}`
        )
        .classList.contains("Bking")
    ) {
      return true;
    }
    if (
      fromTileLocation.column + 1 <= 8 &&
      fromTileLocation.row - 1 >= 1 &&
      document
        .getElementById(
          `${fromTileLocation.column + 1}${fromTileLocation.row - 1}`
        )
        .classList.contains("Bking")
    ) {
      return true;
    }
  } else if (fromColour === "B") {
    // Check if the pawn can capture the king diagonally
    if (
      fromTileLocation.column - 1 >= 1 &&
      fromTileLocation.row + 1 <= 8 &&
      document
        .getElementById(
          `${fromTileLocation.column - 1}${fromTileLocation.row + 1}`
        )
        .classList.contains("Wking")
    ) {
      return true;
    }
    if (
      fromTileLocation.column + 1 <= 8 &&
      fromTileLocation.row + 1 <= 8 &&
      document
        .getElementById(
          `${fromTileLocation.column + 1}${fromTileLocation.row + 1}`
        )
        .classList.contains("Wking")
    ) {
      return true;
    }
  }

  return false; // King is not threatened by this pawn
}
