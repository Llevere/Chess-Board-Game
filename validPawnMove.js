// function isValidPawnMove(fromSquare, toSquare) {
//   /*
//   Pawn rule:
//     Can move two squares vertically if it has not initially moved yet.
//     Can move diagonally only to take a chess piece of another colour.
//     Can only move one square vertically if it has already moved from its initial position.
//   */

//   const fromTileLocation = tileLocator(fromSquare);
//   const toTileLocation = tileLocator(toSquare);

//   if (toTileLocation.row === fromTileLocation.row) {
//     console.log("Pawn is trying to move in the same row.");
//     return false;
//   }

//   if (
//     toTileLocation.column > fromTileLocation.column + 1 ||
//     toTileLocation.column < fromTileLocation.column - 1
//   ) {
//     console.log("Pawn is trying to moving too far.");
//     return false;
//   }

//   const fromClassNameIndex = Array.from(fromSquare.classList).findIndex(
//     (className) => className.substring(1) === "pawn"
//   );
//   const toClassNameIndex = Array.from(toSquare.classList).findIndex(
//     (className) => className.substring(1) === "pawn"
//   );

//   // const toClassNameIndex = toSquare.classList
//   //   .split(" ")
//   //   .findIndex((className) => {
//   //     return className.substring(1) === "pawn";
//   //   });
//   let fromSquareColour, toSquareColour;

//   // If classNameIndex is greater than or equal to 0, it means "pawn" was found
//   if (fromClassNameIndex >= 0) {
//     console.log(
//       "From square colour: " + fromSquare.classList[fromClassNameIndex][0]
//     );
//     fromSquareColour = fromSquare.classList[fromClassNameIndex][0];
//   } else {
//     console.log("Could not find the word 'pawn' in the class name");
//     return false;
//   }
//   if (toClassNameIndex >= 0) {
//     console.log(
//       "To square colour: " + toSquare.classList[fromClassNameIndex][0]
//     );
//     toSquareColour = toSquare.classList[fromClassNameIndex][0];
//   }
//   // if (toClassNameIndex >= 0) {
//   // //   toSquareColour = toSquare.classList[toClassNameIndex][0];
//   // // }
//   // if (fromClassNameIndex < 0 && toClassNameIndex < 0) {
//   //   console.log("Could not find the word 'pawn' in the class name");
//   // }

//   if (fromSquare.classList.contains("start")) {
//     console.log("Pawn contains start in the class name.");
//     if (toTileLocation.column === fromTileLocation.column) {
//       if (fromSquareColour === "B") {
//         if (toTileLocation.row < fromTileLocation.row) {
//           console.log("returning false lin 67");
//           return false;
//         }
//         if (toTileLocation.row - fromTileLocation.row > 2) {
//           console.log("returning false lin 71");
//           return false;
//         }

//         if (toTileLocation.row - fromTileLocation.row === 2) {
//           console.log("2 square move");
//           if (
//             document.getElementById(
//               `${toTileLocation.column}${toTileLocation.row - 1}`
//             ).children.length > 0
//           ) {
//             console.log("returning false lin 490");
//             return false;
//           } else {
//             if (
//               document.getElementById(
//                 `${toTileLocation.column}${toTileLocation.row}`
//               ).children.length > 0
//             ) {
//               if (toSquareColour === "B") {
//                 {
//                   console.log("returning false lin 500");
//                   return false;
//                 }
//               }

//               return true;
//             }
//             return true;
//           }
//         }
//         if (toTileLocation.row - fromTileLocation.row === 1) {
//           console.log("one square move");
//           if (
//             document.getElementById(
//               `${toTileLocation.column}${toTileLocation.row}`
//             ).children.length > 0
//           ) {
//             console.log("returning false lin 519");
//             return false;
//           }
//           return true;
//         }
//         console.log("CHECK THIS BUG OUT - BLACK PAWN 'start' MOVE");
//         console.log(toTileLocation.row - fromTileLocation.row);
//         return false;
//       }
//       if (fromSquareColour === "W") {
//         console.log("MOVING WHITE PAWN");
//         //Invalid - Going backwards
//         if (toTileLocation.row > fromTileLocation.row) {
//           console.log("returning false lin 124");
//           return false;
//         }
//         //Invalid - Going more than two steps
//         if (fromTileLocation.row - toTileLocation.row > 2) {
//           console.log("returning false lin 128");
//           return false;
//         }
//         if (fromTileLocation.row - toTileLocation.row === 2) {
//           console.log("White 'start' - 2 square move");
//           if (
//             document.getElementById(
//               `${toTileLocation.column}${toTileLocation.row + 1}`
//             ).children.length > 0
//           ) {
//             console.log("returning false lin 542");
//             return false;
//           } else {
//             if (
//               document.getElementById(
//                 `${toTileLocation.column}${toTileLocation.row}`
//               ).children.length > 0
//             ) {
//               console.log("returning false line 551");
//               return false;
//             }
//           }
//         }
//         if (toTileLocation.row - fromTileLocation.row === 1) {
//           console.log("one square move");
//           if (
//             document.getElementById(
//               `${toTileLocation.column}${toTileLocation.row}`
//             ).children.length > 0
//           ) {
//             console.log("returning false lin 519");
//             return false;
//           }
//           //Empty square
//           return true;
//         }
//         console.log("CHECK THIS BUG OUT -  PAWN 'start' MOVE");
//         // return false;
//       }
//     }
//     //Pawn is taking another chess piece

//     // Pawn is moving right diagonally
//     if (toTileLocation.column === fromTileLocation.column + 1) {
//       console.log("Moving to the right column with the pawn.");
//       //Movement for Black pawn
//       if (fromSquareColour === "B") {
//         //Valid movement
//         if (toTileLocation.row === fromTileLocation.row + 1) {
//           //Check for children in diagonal tile
//           if (
//             document.getElementById(
//               `${toTileLocation.column}${toTileLocation.row}`
//             ).children.length > 0
//           ) {
//             return true;
//           }
//         } else {
//           console.log("returning false line 589");
//           return false;
//         }
//       }
//       //Movement for White pawn
//       if (fromSquareColour === "W") {
//         if (toTileLocation.row === fromTileLocation.row + 1) {
//           //Check for children in diagonal tile
//           if (
//             document.getElementById(
//               `${toTileLocation.column}${toTileLocation.row}`
//             ).children.length > 0
//           ) {
//             return true;
//           }
//         } else {
//           console.log("returning false line 605");
//           return false;
//         }
//       }
//     } else if (toTileLocation.column === fromTileLocation.column - 1) {
//       console.log("Moving to the left column with the pawn.");
//       if (fromSquareColour === "B") {
//         //Squar movement - Down one, left one
//         if (toTileLocation.row === fromTileLocation.row + 1) {
//           //Check to see if there is a child in the square
//           if (
//             document.getElementById(
//               `${toTileLocation.column}${toTileLocation.row}`
//             ).children.length > 0
//           ) {
//             return true;
//           }
//         } else {
//           console.log("returning false line 623");
//           return false;
//         }
//       }

//       //Movement for White pawn
//       else if (fromSquareColour === "W") {
//         //Squar movement - Up one, left one
//         if (toTileLocation.row === fromTileLocation.row - 1) {
//           //Check to see if there is a child in the square
//           if (
//             document.getElementById(
//               `${toTileLocation.column}${toTileLocation.row}`
//             ).children.length > 0
//           ) {
//             return true;
//           }
//         } else {
//           console.log("returning false line 641");
//           return false;
//         }
//       } else {
//         console.log(
//           "Moving pawn. Can't detect if it's White or Black. Returning false"
//         );
//         return false;
//       }
//     }
//     // Pawn no longer has 'start' in its class name,
//     // single square moves only
//     else if (toTileLocation.column === fromTileLocation.column) {
//       console.log("SAME COLUMN -- - - - - -");
//       if (fromSquareColour === "B") {
//         if (toTileLocation.row < fromTileLocation.row) {
//           console.log("returning false lin 251");
//           return false;
//         }
//         if (toTileLocation.row - fromTileLocation.row > 2) {
//           console.log("returning false lin 255");
//           return false;
//         }
//         console.log(
//           "PASSED INITIAL FALSE TEST: ",
//           toTileLocation.row - fromTileLocation.row
//         );
//         if (toTileLocation.row - fromTileLocation.row === 1) {
//           console.log("ONE SQUARE MOVE");
//           if (
//             document.getElementById(
//               `${toTileLocation.column}${toTileLocation.row}`
//             ).children.length > 0
//           ) {
//             // Pawns can't take pieces in front of it, only diagonally
//             {
//               console.log("returning false lin 271");
//               return false;
//             }
//           }
//           return true;
//         }
//         console.log("CHECK THIS BUG OUT - BLACK PAWN 'start' MOVE");
//         console.log(toTileLocation.row - fromTileLocation.row);
//         return false;
//       }
//       if (fromSquareColour === "W") {
//         if (toTileLocation.row > fromTileLocation.row) {
//           console.log("returning false lin 283");
//           return false;
//         }
//         if (fromTileLocation.row - toTileLocation.row > 2) {
//           console.log("returning false lin 287");
//           return false;
//         }
//         if (fromTileLocation.row - toTileLocation.row === 2) {
//           if (
//             document.getElementById(
//               `${toTileLocation.column}${toTileLocation.row + 1}`
//             ).children.length > 0
//           ) {
//             console.log("returning false lin 297");
//             return false;
//           } else {
//             if (
//               document.getElementById(
//                 `${toTileLocation.column}${toTileLocation.row}`
//               ).children.length > 0
//             ) {
//               if (toSquareColour === "W") {
//                 console.log("returning false lin 307");
//                 return false;
//               }

//               return true;
//             }
//           }
//         }
//         if (fromTileLocation.row - toTileLocation.row === 1) {
//           if (
//             document.getElementById(
//               `${toTileLocation.column}${toTileLocation.row}`
//             ).children.length > 0
//           ) {
//             if (toSquareColour === "W") {
//               console.log("returning false lin 322");
//               return false;
//             }

//             return true;
//           }
//         }
//         // if (
//         //   document.getElementById(
//         //     `${toTileLocation.column}${toTileLocation.row + 1}`
//         //   ).children.length > 0
//         // )
//         //   return false;
//         // if (
//         //   document.getElementById(
//         //     `${toTileLocation.column}${toTileLocation.row}`
//         //   ).children.length > 0
//         // )
//         //   return true;

//         console.log("CHECK THIS BUG OUT - WHITE PAWN 'start' MOVE");
//         return false;
//       }
//     }
//     console.log(
//       "INVALID MOVE FOR PAWN. ",
//       toTileLocation.row - fromTileLocation.row
//     );

//     //Invalid move
//     return false;
//   }
// }

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
