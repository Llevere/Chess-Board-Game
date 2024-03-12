// function isRookInCheck(position) {
//   const fromTileLocation = tileLocator(position);
//   const fromColour = position.classList[3][0];

//   //Check all columns within the same row to the right of the rook
//   for (let i = fromTileLocation.column + 1; i < 9; i++) {
//     if (
//       document.getElementById(`${i}${fromTileLocation.row}`).children.length > 0
//     ) {
//       if (
//         document.getElementById(`${i}${fromTileLocation.row}`)
//           .classList[3][0] !== fromColour &&
//         (document.getElementById(`${i}${fromTileLocation.row}`).classList[3] ===
//           fromColour) ===
//           "W"
//           ? "Bking"
//           : "Wking"
//       ) {
//         document.getElementById(
//           `${i}${fromTileLocation.row}`
//         ).style.backgroundColor = "orange";
//         return true;
//       }
//       break;
//     }
//   }

//   //Check all columns within the same row to the left of the rook
//   for (let i = fromTileLocation.column - 1; i > 0; i--) {
//     //const square = document.getElementById(`${i}${fromTileLocation.row}`);

//     if (
//       document.getElementById(`${i}${fromTileLocation.row}`).children.length > 0
//     ) {
//       if (
//         document.getElementById(`${i}${fromTileLocation.row}`)
//           .classList[3][0] !== fromColour &&
//         (document.getElementById(`${i}${fromTileLocation.row}`).classList[3] ===
//           fromColour) ===
//           "W"
//           ? "Bking"
//           : "Wking"
//       ) {
//         document.getElementById(
//           `${i}${fromTileLocation.row}`
//         ).style.backgroundColor = "orange";
//         return true;
//       }
//       break;
//     }
//   }

//   if (fromTileLocation.row + 1 < 9) {
//     //Check all columns within the same row to the right of the rook
//     for (let i = fromTileLocation.row + 1; i < 9; i++) {
//       if (
//         document.getElementById(`${fromTileLocation.column}${i}`).children
//           .length > 0
//       ) {
//         if (
//           document.getElementById(`${fromTileLocation.column}${i}`)
//             .classList[3][0] !== fromColour &&
//           (document.getElementById(`${i}${fromTileLocation.row}`)
//             .classList[3] ===
//             fromColour) ===
//             "W"
//             ? "Bking"
//             : "Wking"
//         ) {
//           document.getElementById(
//             `${i}${fromTileLocation.row}`
//           ).style.backgroundColor = "orange";
//           return true;
//         }
//         break;
//       }
//     }
//   }

//   //Check all columns within the same row to the right of the rook
//   for (let i = fromTileLocation.row - 1; i > 0; i--) {
//     if (
//       document.getElementById(`${fromTileLocation.column}${i}`).children
//         .length > 0
//     ) {
//       if (
//         document.getElementById(`${fromTileLocation.column}${i}`)
//           .classList[3][0] !== fromColour &&
//         (document.getElementById(`${i}${fromTileLocation.row}`).classList[3] ===
//           fromColour) ===
//           "W"
//           ? "Bking"
//           : "Wking"
//       ) {
//         document.getElementById(
//           `${i}${fromTileLocation.row}`
//         ).style.backgroundColor = "orange";
//         return true;
//       }
//       break;
//     }
//   }
// }
function isRookTakingKing(position) {
  const fromTileLocation = tileLocator(position);
  const fromColour = position.classList[3][0];

  // Check horizontally and vertically if the king is threatened by the rook
  for (let i = 1; i <= 8; i++) {
    // Check horizontally
    if (i !== fromTileLocation.column) {
      if (
        document
          .getElementById(`${i}${fromTileLocation.row}`)
          .classList.contains("Bking") ||
        document
          .getElementById(`${i}${fromTileLocation.row}`)
          .classList.contains("Wking")
      ) {
        return true;
      }
    }
    // Check vertically
    if (i !== fromTileLocation.row) {
      if (
        document
          .getElementById(`${fromTileLocation.column}${i}`)
          .classList.contains("Bking") ||
        document
          .getElementById(`${fromTileLocation.column}${i}`)
          .classList.contains("Wking")
      ) {
        return true;
      }
    }
  }

  return false; // King is not threatened by this rook
}
