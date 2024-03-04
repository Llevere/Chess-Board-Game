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
  const pieceClassName = swappingFrom.classList[3];

  if (isValidMove(pieceClassName, swappingFrom, swappingTo)) {
    let img = swappingFrom.querySelector("img");
    swappingFrom.removeChild(img);
    swappingTo.appendChild(img);

    swappingTo.classList.add(swappingFrom.classList[3]);
    swappingFrom.classList.remove(swappingFrom.classList[3]);
  } else {
    console.log("Invalid move for this piece!");
  }

  swappingFrom.classList.remove("highlight");
  swappingTo.classList.remove("highlight");
  tempSquare.classList.remove("highlight");
  tempSquare = null;
};

moveToFilledSquare = (swappingFrom, swappingTo) => {
  let swappingFromImg = swappingFrom.querySelector("img");
  let swappingToImg = swappingTo.querySelector("img");

  // Check if both squares have images
  if (swappingFromImg && swappingToImg) {
    swappingFrom.removeChild(swappingFromImg);
    swappingTo.removeChild(swappingToImg);

    swappingFrom.appendChild(swappingToImg);
    swappingTo.appendChild(swappingFromImg);

    swappingTo.classList.add(swappingFrom.classList[3]);
    swappingFrom.classList.remove(swappingFrom.classList[3]);
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
      console.log("Moving rook");
      // Implement rook movement rules
      return isValidRookMove(fromSquare, toSquare);

    // Add cases for other chess pieces

    default:
      return true; // A chess piece was not found
  }
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
            console.log(
              "Clicking on a tile with an image! Checking what image is inside."
            );

            console.log(toSquare.querySelector("img"));
          }
          pieceFound = true;
          break;
        }
      }
    } else {
      // Rook is moving down
      for (let i = fromTileLocation.row; i > toTileLocation.row; i--) {
        if (
          document.getElementById(`${fromTileLocation.column}${i}`).children
            .length > 0
        ) {
          pieceFound = true;
          break;
        }
      }
    }
    if (!pieceFound) {
      console.log("No chess piece found, rook can move to location.");
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
        if (
          document.getElementById(`${fromTileLocation.column}${i}`).children
            .length > 0
        ) {
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
        if (
          document.getElementById(`${fromTileLocation.column}${i}`).children
            .length > 0
        ) {
          pieceFound = true;
          break;
        }
      }
    }
    if (!pieceFound) {
      console.log("No chess piece found, rook can move to location.");
      return true;
    }
  } else {
    return false; // Invalid move
  }
}

function tileLocator(square) {
  // Assuming class name format is "XY" where X is the column and Y is the row
  const className = square.classList[0];
  const column = parseInt(className[0]);
  const row = parseInt(className[1]);

  return { column, row };
}
