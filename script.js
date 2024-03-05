let selectedPiece = null;
let selectedSquare = null;

let tempSquare = null;
let tempSquareBgColour = "";
let originalSquareBgColors = {};

document.addEventListener("DOMContentLoaded", function () {
  let chestPiecesdivst = document.getElementById("chest-pieces");
  let chessBoard = document.getElementById("container");
  // Function to create and append an image to a square
  function addImageToSquare(square, imageName) {
    let img = document.createElement("img");
    img.src = "/images/" + imageName; // Path to the image
    //img.draggable = true; // Enable dragging
    // img.addEventListener("click", function (event) {
    // });
    // img.addEventdivstener("dragstart", function (event) {
    //   console.log("Image being dragged");
    //   event.dataTransfer.setData("text/plain", imageName);
    //   event.dataTransfer.setDragImage("./images/" + imageName, 25, 35);
    // });
    square.appendChild(img);
  }

  let evenColour = "#ebecd0";
  let oddColour = "#739552";

  let columnNumber = 1;

  //Start at one because once rowCounter hits 8 on the last square,
  // columnCounter will not increment again.
  //This is for an 8x8 grid.
  let rowNumber = 1;

  let isEven = false;
  for (let i = 1; i < 65; i++) {
    //Reset the row counter. 8th square was created.
    //Column created, increment column counter.
    if (columnNumber === 9) {
      columnNumber = 1;
      rowNumber++;
    }
    let div = document.createElement("div");

    div.addEventListener("click", function () {
      if (tempSquare !== div) {
        if (div.children.length > 0) {
          // Revert the background color of the previously clicked square
          if (tempSquare) {
            tempSquare.style.backgroundColor =
              originalSquareBgColors[tempSquare.classList[0]];

            if (tempSquare.children.length > 0) {
              moveToFilledSquare(tempSquare, div);
              tempSquare = null;
            }
          } else {
            // highlight the clicked square
            tempSquare = div;
            // tempSquare.style.backgroundColor = "#ffff33";
            tempSquare.classList.add("highlight");
          }
        } else {
          //Square picked has an image as a child
          if (tempSquare && tempSquare.children.length > 0) {
            moveToEmptySquare(tempSquare, div);
          }
        }
      } else {
        tempSquare.classList.remove("highlight");
        tempSquare = null;
      }
    });

    // Match the 8th square from the previous row
    if ((i - 1) % 8 === 0) isEven = !isEven;
    // div.className = `${columnNumber % 10}${rowNumber} ${
    //   isEven ? "even" : "odd"
    // } square`;
    div.id = `${columnNumber % 10}${rowNumber}`;
    //[0] = (Column : Row) - What tile it is.
    //Example: 31 = Column 3 : Row 1
    div.classList.add(`${columnNumber % 10}${rowNumber}`);
    //[1] = background colour for css
    div.classList.add(`${isEven ? "even" : "odd"}`);
    div.classList.add("square");
    isEven = !isEven;
    originalSquareBgColors[div.classList[0]] = div.style.backgroundColor;

    //Black pieces row 1
    if (i === 64 && rowNumber === 8) {
      // placeholder
      addImageToSquare(div, "Wrook.png");
      div.classList.add("Wrook");
    }
    if (i === 63 && rowNumber === 8) {
      // placeholder
      addImageToSquare(div, "Wknight.png");
      div.classList.add("Wknight");
    }
    if (i === 62 && rowNumber === 8) {
      // placeholder
      addImageToSquare(div, "Wbishop.png");
      div.classList.add("Wbishop");
    }
    if (i === 61 && rowNumber === 8) {
      // placeholder
      addImageToSquare(div, "Wqueen.png");
      div.classList.add("Wqueen");
    }
    if (i === 60 && rowNumber === 8) {
      // placeholder
      addImageToSquare(div, "Wking.png");
      div.classList.add("Wking");
    }
    if (i === 59 && rowNumber === 8) {
      // placeholder
      addImageToSquare(div, "Wbishop.png");
      div.classList.add("Wbishop");
    }
    if (i === 58 && rowNumber === 8) {
      // placeholder
      addImageToSquare(div, "Wknight.png");
      div.classList.add("Wknight");
    }
    if (i === 57 && rowNumber === 8) {
      // placeholder
      addImageToSquare(div, "Wrook.png");
      div.classList.add("Wrook");
    }
    // Black pieces row 2
    if (i === 49 && rowNumber === 7) {
      // placeholder
      addImageToSquare(div, "Wpawn.png");
      div.classList.add("Wpawn");
      // Add for starting move with pawn
      div.classList.add("start");
    }
    if (i === 50 && rowNumber === 7) {
      // placeholder
      addImageToSquare(div, "Wpawn.png");
      div.classList.add("Wpawn");
      // Add for starting move with pawn
      div.classList.add("start");
    }
    if (i === 51 && rowNumber === 7) {
      // placeholder
      addImageToSquare(div, "Wpawn.png");
      div.classList.add("Wpawn");
      // Add for starting move with pawn
      div.classList.add("start");
    }
    if (i === 52 && rowNumber === 7) {
      // placeholder
      addImageToSquare(div, "Wpawn.png");
      div.classList.add("Wpawn");
      // Add for starting move with pawn
      div.classList.add("start");
    }
    if (i === 53 && rowNumber === 7) {
      // placeholder
      addImageToSquare(div, "Wpawn.png");
      div.classList.add("Wpawn");
      // Add for starting move with pawn
      div.classList.add("start");
    }
    if (i === 54 && rowNumber === 7) {
      // placeholder
      addImageToSquare(div, "Wpawn.png");
      div.classList.add("Wpawn");
      // Add for starting move with pawn
      div.classList.add("start");
    }
    if (i === 55 && rowNumber === 7) {
      // placeholder
      addImageToSquare(div, "Wpawn.png");
      div.classList.add("Wpawn");
      // Add for starting move with pawn
      div.classList.add("start");
    }
    if (i === 56 && rowNumber === 7) {
      // placeholder
      addImageToSquare(div, "Wpawn.png");
      div.classList.add("Wpawn");
      // Add for starting move with pawn
      div.classList.add("start");
    }

    // White pieces row 7

    if (i === 1 && rowNumber === 1) {
      // placeholder
      addImageToSquare(div, "Brook.png");
      div.classList.add("Brook");
    }
    if (i === 2 && rowNumber === 1) {
      // placeholder
      addImageToSquare(div, "Bknight.png");
      div.classList.add("Bknight");
    }
    if (i === 3 && rowNumber === 1) {
      // placeholder
      addImageToSquare(div, "Bbishop.png");
      div.classList.add("Bbishop");
    }
    if (i === 4 && rowNumber === 1) {
      // placeholder
      addImageToSquare(div, "Bqueen.png");
      div.classList.add("Bqueen");
    }
    if (i === 5 && rowNumber === 1) {
      // placeholder
      addImageToSquare(div, "Bking.png");
      div.classList.add("Bking");
    }
    if (i === 6 && rowNumber === 1) {
      // placeholder
      addImageToSquare(div, "Bbishop.png");
      div.classList.add("Bbishop");
    }
    if (i === 7 && rowNumber === 1) {
      // rowNumber
      addImageToSquare(div, "Bknight.png");
      div.classList.add("Bknight");
    }
    if (i === 8 && rowNumber === 1) {
      // placeholder
      addImageToSquare(div, "Brook.png");
      div.classList.add("Brook");
    }

    // White pieces row 8
    if (i === 16 && rowNumber === 2) {
      // placeholder
      addImageToSquare(div, "Bpawn.png");
      div.classList.add("Bpawn");
      // Add for starting move with pawn
      div.classList.add("start");
    }
    if (i === 15 && rowNumber === 2) {
      // placeholder
      addImageToSquare(div, "Bpawn.png");
      div.classList.add("Bpawn");
      // Add for starting move with pawn
      div.classList.add("start");
    }
    if (i === 14 && rowNumber === 2) {
      // placeholder
      addImageToSquare(div, "Bpawn.png");
      div.classList.add("Bpawn");
      // Add for starting move with pawn
      div.classList.add("start");
    }
    if (i === 13 && rowNumber === 2) {
      // placeholder
      addImageToSquare(div, "Bpawn.png");
      div.classList.add("Bpawn");
      // Add for starting move with pawn
      div.classList.add("start");
    }
    if (i === 12 && rowNumber === 2) {
      // placeholder
      addImageToSquare(div, "Bpawn.png");
      div.classList.add("Bpawn");
      // Add for starting move with pawn
      div.classList.add("start");
    }
    if (i === 11 && rowNumber === 2) {
      // placeholder
      addImageToSquare(div, "Bpawn.png");
      div.classList.add("Bpawn");
      // Add for starting move with pawn
      div.classList.add("start");
    }
    if (i === 10 && rowNumber === 2) {
      // placeholder
      addImageToSquare(div, "Bpawn.png");
      div.classList.add("Bpawn");
      // Add for starting move with pawn
      div.classList.add("start");
    }
    if (i === 9 && rowNumber === 2) {
      // placeholder
      addImageToSquare(div, "Bpawn.png");
      div.classList.add("Bpawn");
      // Add for starting move with pawn
      div.classList.add("start");
    }

    chessBoard.appendChild(div);
    columnNumber++;
  }
});

// moveToEmptySquare = (swappingFrom, swappingTo) => {
//   let img1 = swappingFrom.querySelector("img");
//   swappingFrom.removeChild(img1);
//   swappingTo.appendChild(img1);

//   swappingFrom.classList.remove("highlight");
// };
moveToEmptySquare = (swappingFrom, swappingTo) => {
  console.log("BEFORE SWAP");
  console.log("From: " + swappingFrom.classList);
  console.log("To: " + swappingTo.classList);
  const pieceClassName = swappingFrom.classList[3];

  if (isValidMove(pieceClassName, swappingFrom, swappingTo)) {
    let img = swappingFrom.querySelector("img");
    swappingFrom.removeChild(img);
    swappingTo.appendChild(img);

    // Remove the class name "start" if it exists
    swappingFrom.classList.remove("start");
    swappingTo.classList.remove("start");

    swappingTo.classList.add(swappingFrom.classList[3]);
    swappingFrom.classList.remove(swappingFrom.classList[3]);
  } else {
    console.log("Invalid move for this piece!");
  }

  console.log("AFTER SWAP");
  console.log("From: " + swappingFrom.classList);
  console.log("To: " + swappingTo.classList);
  swappingFrom.classList.remove("highlight");
  swappingTo.classList.remove("highlight");
  tempSquare.classList.remove("highlight");
  tempSquare = null;
};

moveToFilledSquare = (swappingFrom, swappingTo) => {
  let swappingFromImg = swappingFrom.querySelector("img");
  let swappingToImg = swappingTo.querySelector("img");
  const pieceClassName = swappingFrom.classList[3];
  console.log("From: " + swappingFrom.classList);
  console.log("To: " + swappingTo.classList);
  if (isValidMove(pieceClassName, swappingFrom, swappingTo)) {
    /* 
      Check for the first character, it indicates the colour
      W = White
      B = Black 
      */
    if (swappingFrom.classList[3][0] !== swappingTo.classList[3][0]) {
      console.log("Swapping different colours.");
      if (swappingFromImg && swappingToImg) {
        // Check if both squares have images
        swappingFrom.removeChild(swappingFromImg);
        swappingTo.removeChild(swappingToImg);

        //swappingFrom.appendChild(swappingToImg);
        swappingTo.appendChild(swappingFromImg);

        // //

        // /* [3] = chess piece */
        // //swappingTo.classList.remove(swappingTo.classList[3]);

        // /* Check for "starting", pawns start with this in their class name,
        // which will be the 4th index */
        // if (swappingTo.classList.contains("starts")) {
        //   // Chess piece is a pawn and has not moved from its initial position.

        //   //Remove the "start" class name
        //   swappingFrom.classList.remove(swappingTo.classList[3]);
        //   swappingTo.classList.add(swappingFrom.classList[3]);
        // }
        // if (swappingFrom.classList.contains("start")) {
        //   // Chess piece is a pawn and has not moved from its initial position.
        // }
        console.log("BEFORE SWAP");
        console.log("From: " + swappingFrom.classList);
        console.log("To: " + swappingTo.classList);

        console.log("Removing the class name start.");
        swappingFrom.classList.remove("start");
        swappingTo.classList.remove("start");

        swappingTo.classList.remove(swappingTo.classList[3]);
        swappingTo.classList.add(swappingFrom.classList[3]);
        swappingFrom.classList.remove(swappingFrom.classList[3]);
        console.log("AFTER SWAP");
        console.log("From: " + swappingFrom.classList);
        console.log("To: " + swappingTo.classList);
      }
    }
  } else {
    console.log("Invalid movement.");
  }

  tempSquare.classList.remove("highlight");
  tempSquare = null;

  swappingFrom.classList.remove("highlight");
  swappingTo.classList.remove("highlight");
};

function isValidMove(pieceClassName, fromSquare, toSquare) {
  console.log("Piece classList: " + pieceClassName);
  // Implement rules for each chess piece
  switch (pieceClassName.substring(1)) {
    case "rook":
      // Implement rook movement rules
      return isValidRookMove(fromSquare, toSquare);
    case "pawn":
      return isValidPawnMove(fromSquare, toSquare);
    // Add cases for other chess pieces

    default:
      return true; // A chess piece was not found
  }
}

function isValidPawnMove(fromSquare, toSquare) {
  /*
  Pawn rule:
    Can move two squares vertically if it has not initially moved yet.
    Can move diagonally only to take a chess piece of another colour.
    Can only move one square vertically if it has already moved from its initial position.
  */

  const fromTileLocation = tileLocator(fromSquare);
  const toTileLocation = tileLocator(toSquare);

  if (toTileLocation.row === fromTileLocation.row) {
    console.log("Pawn is trying to move in the same row.");
    return false;
  }

  if (
    toTileLocation.column > fromTileLocation.column + 1 ||
    toTileLocation.column < fromTileLocation.column - 1
  ) {
    console.log("Pawn is trying to moving too far.");
    return false;
  }

  const fromClassNameIndex = Array.from(fromSquare.classList).findIndex(
    (className) => className.substring(1) === "pawn"
  );
  const toClassNameIndex = Array.from(toSquare.classList).findIndex(
    (className) => className.substring(1) === "pawn"
  );

  // const toClassNameIndex = toSquare.classList
  //   .split(" ")
  //   .findIndex((className) => {
  //     return className.substring(1) === "pawn";
  //   });
  let fromSquareColour, toSquareColour;

  // If classNameIndex is greater than or equal to 0, it means "pawn" was found
  if (fromClassNameIndex >= 0) {
    console.log(
      "From square colour: " + fromSquare.classList[fromClassNameIndex][0]
    );
    fromSquareColour = fromSquare.classList[fromClassNameIndex][0];
  } else {
    console.log("Could not find the word 'pawn' in the class name");
    return false;
  }
  if (toClassNameIndex >= 0) {
    console.log(
      "To square colour: " + toSquare.classList[fromClassNameIndex][0]
    );
    toSquareColour = toSquare.classList[fromClassNameIndex][0];
  }
  // if (toClassNameIndex >= 0) {
  // //   toSquareColour = toSquare.classList[toClassNameIndex][0];
  // // }
  // if (fromClassNameIndex < 0 && toClassNameIndex < 0) {
  //   console.log("Could not find the word 'pawn' in the class name");
  // }

  if (fromSquare.classList.contains("start")) {
    console.log("Pawn contains start in the class name.");
    if (toTileLocation.column === fromTileLocation.column) {
      if (fromSquareColour === "B") {
        if (toTileLocation.row < fromTileLocation.row) return false;
        if (toTileLocation.row - fromTileLocation.row > 2) return false;

        if (toTileLocation.row - fromTileLocation.row === 2) {
          console.log("2 square move");
          if (
            document.getElementById(
              `${toTileLocation.column}${toTileLocation.row - 1}`
            ).children.length > 0
          )
            return false;
          else {
            if (
              document.getElementById(
                `${toTileLocation.column}${toTileLocation.row}`
              ).children.length > 0
            ) {
              if (toSquareColour === "B") {
                return false;
              }

              return true;
            }
            return true;
          }
        }
        if (toTileLocation.row - fromTileLocation.row === 1) {
          console.log("one square move");
          if (
            document.getElementById(
              `${toTileLocation.column}${toTileLocation.row}`
            ).children.length > 0
          ) {
            if (toSquareColour === "B") {
              return false;
            }

            return true;
          }
          return true;
        }
        console.log("CHECK THIS BUG OUT - BLACK PAWN 'start' MOVE");
        console.log(toTileLocation.row - fromTileLocation.row);
        return false;
      }
      if (fromSquareColour === "W") {
        if (toTileLocation.row < fromTileLocation.row) return false;
        if (fromTileLocation.row - toTileLocation.row > 2) return false;
        if (fromTileLocation.row - toTileLocation.row === 2) {
          if (
            document.getElementById(
              `${toTileLocation.column}${toTileLocation.row + 1}`
            ).children.length > 0
          )
            return false;
          else {
            if (
              document.getElementById(
                `${toTileLocation.column}${toTileLocation.row}`
              ).children.length > 0
            ) {
              return false;
            }
          }
        }
        if (fromTileLocation.row - toTileLocation.row === 1) {
          if (
            document.getElementById(
              `${toTileLocation.column}${toTileLocation.row}`
            ).children.length > 0
          ) {
            return false;
          }

          console.log("CHECK THIS BUG OUT - WHITE PAWN 'start' MOVE");
          return false;
        }
      }
    }
    //Pawn is taking another chess piece

    // Pawn is moving right diagonally
    if (toTileLocation.column === fromTileLocation.column + 1) {
      console.log("Moving to the right column with the pawn.");
      //Movement for Black pawn
      if (fromSquareColour === "B") {
        //Valid movement
        if (toTileLocation.row === fromTileLocation.row + 1) {
          //Check for children in diagonal tile
          if (
            document.getElementById(
              `${toTileLocation.column}${toTileLocation.row}`
            ).children.length > 0
          ) {
            return true;
          }
        } else {
          return false;
        }
      }
      //Movement for White pawn
      if (fromSquareColour === "W") {
        if (toTileLocation.row === fromTileLocation.row + 1) {
          //Check for children in diagonal tile
          if (
            document.getElementById(
              `${toTileLocation.column}${toTileLocation.row}`
            ).children.length > 0
          ) {
            return true;
          }
        } else {
          return false;
        }
      }
    } else if (toTileLocation.column === fromTileLocation.column - 1) {
      console.log("Moving to the left column with the pawn.");
      if (fromSquareColour === "B") {
        //Squar movement - Down one, left one
        if (toTileLocation.row === fromTileLocation.row + 1) {
          //Check to see if there is a child in the square
          if (
            document.getElementById(
              `${toTileLocation.column}${toTileLocation.row}`
            ).children.length > 0
          ) {
            return true;
          }
        } else {
          return false;
        }
      }

      //Movement for White pawn
      else if (fromSquareColour === "W") {
        //Squar movement - Up one, left one
        if (toTileLocation.row === fromTileLocation.row - 1) {
          //Check to see if there is a child in the square
          if (
            document.getElementById(
              `${toTileLocation.column}${toTileLocation.row}`
            ).children.length > 0
          ) {
            return true;
          }
        } else {
          return false;
        }
      } else {
        console.log(
          "Moving pawn. Can't detect if it's White or Black. Returning false"
        );
        return false;
      }
    }
    // Pawn no longer has 'start' in its class name,
    // single square moves only
    else if (toTileLocation.column === fromTileLocation.column) {
      console.log("SAME COLUMN -- - - - - -");
      if (fromSquareColour === "B") {
        if (toTileLocation.row < fromTileLocation.row) return false;
        if (toTileLocation.row - fromTileLocation.row > 2) return false;
        console.log(
          "PASSED INITIAL FALSE TEST: ",
          toTileLocation.row - fromTileLocation.row
        );
        if (toTileLocation.row - fromTileLocation.row === 1) {
          console.log("ONE SQUARE MOVE");
          if (
            document.getElementById(
              `${toTileLocation.column}${toTileLocation.row}`
            ).children.length > 0
          ) {
            // Pawns can't take pieces in front of it, only diagonally
            return false;
          }
          return true;
        }
        console.log("CHECK THIS BUG OUT - BLACK PAWN 'start' MOVE");
        console.log(toTileLocation.row - fromTileLocation.row);
        return false;
      }
      if (fromSquareColour === "W") {
        if (toTileLocation.row < fromTileLocation.row) return false;
        if (fromTileLocation.row - toTileLocation.row > 2) return false;
        if (fromTileLocation.row - toTileLocation.row === 2) {
          if (
            document.getElementById(
              `${toTileLocation.column}${toTileLocation.row + 1}`
            ).children.length > 0
          )
            return false;
          else {
            if (
              document.getElementById(
                `${toTileLocation.column}${toTileLocation.row}`
              ).children.length > 0
            ) {
              if (toSquareColour === "W") {
                return false;
              }

              return true;
            }
          }
        }
        if (fromTileLocation.row - toTileLocation.row === 1) {
          if (
            document.getElementById(
              `${toTileLocation.column}${toTileLocation.row}`
            ).children.length > 0
          ) {
            if (toSquareColour === "W") {
              return false;
            }

            return true;
          }
        }
        // if (
        //   document.getElementById(
        //     `${toTileLocation.column}${toTileLocation.row + 1}`
        //   ).children.length > 0
        // )
        //   return false;
        // if (
        //   document.getElementById(
        //     `${toTileLocation.column}${toTileLocation.row}`
        //   ).children.length > 0
        // )
        //   return true;

        console.log("CHECK THIS BUG OUT - WHITE PAWN 'start' MOVE");
        return false;
      }
    }
    console.log(
      "INVALID MOVE FOR PAWN. ",
      toTileLocation.row - fromTileLocation.row
    );

    //Invalid move
    return false;
  }

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
            if (i === toTileLocation.row) {
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
            if (i === toTileLocation.row) {
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

  const isThirdIndexChessPiece = (chessPiece) => {
    // Return if the 3rd index starts with W or B (indicating it's black or white).
    // If returns false, it means the 3rd index in the class name is not a chess piece.
    return (
      chessPiece.classList[3][0] === "W" || chessPiece.classList[3][0] === "B"
    );
  };

  function tileLocator(square) {
    // Assuming class name format is "XY" where X is the column and Y is the row
    const className = square.classList[0];
    const column = parseInt(className[0]);
    const row = parseInt(className[1]);

    return { column, row };
  }
}
