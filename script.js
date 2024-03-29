let selectedPiece = null;
let selectedSquare = null;

let tempSquare = null;
let tempSquareBgColour = "";
let originalSquareBgColors = {};

let currentPlayer = "W";
let playersTurnTitle;

let gameStarted = false;

let chosenWhiteChessSet = "white/images/";
let chosenBlackChessSet = "black/images/";
let chessBoard;
document.addEventListener("DOMContentLoaded", function () {
  chessBoard = document.getElementById("chessboard");
  let setWhiteOptions = document.getElementsByClassName("set-white-options")[0];
  let setBlackOptions = document.getElementsByClassName("set-black-options")[0];

  document.getElementById("reset").addEventListener("click", () => {
    chessBoard.innerHTML = "";
    chosenWhiteChessSet = "white/images/";
    chosenBlackChessSet = "black/images/";

    currentPlayer = "W";
    playersTurnTitle.style.backgroundColor = "White";
    playersTurnTitle.style.color = "Black";
    playersTurnTitle.textContent = "White's Turn";

    let whiteButton = document.getElementById("set-white");
    let blackButton = document.getElementById("set-black");
    // Remove the "hide" class and enable the buttons
    whiteButton.classList.remove("hide");
    blackButton.classList.remove("hide");
    whiteButton.disabled = false;
    blackButton.disabled = false;

    gameStarted = false;
    generateNewChessBoard(chessBoard);
  });

  document.getElementById("set-white").addEventListener("click", () => {
    setWhiteOptions.classList.toggle("show");
  });

  document.getElementById("set-black").addEventListener("click", () => {
    setBlackOptions.classList.toggle("show");
  });

  // Event listener to hide options when clicking outside of them
  document.addEventListener("click", function (event) {
    if (
      !event.target.matches("#set-white") &&
      !event.target.matches("#set-black")
    ) {
      setWhiteOptions.classList.remove("show");
      setBlackOptions.classList.remove("show");
    }
  });

  // Event listeners for option clicks
  document.querySelectorAll(".chess-set-white").forEach((option) => {
    option.addEventListener("click", function () {
      chosenWhiteChessSet = this.id;

      // Close the options list
      setWhiteOptions.classList.remove("show");
      setBlackOptions.classList.remove("show");
      chessBoard.innerHTML = "";
      generateNewChessBoard(chessBoard);
    });
  });

  document.querySelectorAll(".chess-set-black").forEach((option) => {
    option.addEventListener("click", function () {
      chosenBlackChessSet = this.id;

      // Close the options list
      setWhiteOptions.classList.remove("show");
      setBlackOptions.classList.remove("show");

      chessBoard.innerHTML = "";
      generateNewChessBoard(chessBoard);
    });
  });

  // document.getElementById("set-black");
  playersTurnTitle = document.getElementById("players-turn");
  playersTurnTitle.style.backgroundColor = "White";

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
        if (!tempSquare && div.classList[3][0] === currentPlayer) {
          giveHints(div);
        }
        if (div.children.length > 0) {
          // Revert the background color of the previously clicked square
          if (tempSquare) {
            tempSquare.style.backgroundColor =
              originalSquareBgColors[tempSquare.classList[0]];

            if (
              tempSquare.children.length > 0 &&
              tempSquare.classList[3][0] === currentPlayer &&
              tempSquare.classList[3][0] !== div.classList[3][0]
            ) {
              moveToFilledSquare(tempSquare, div);
              tempSquare = null;
            }
          } else {
            if (div.classList[3][0] === currentPlayer) {
              // highlight the clicked square
              tempSquare = div;
              // tempSquare.style.backgroundColor = "#ffff33";
              tempSquare.classList.add("highlight");
            }
          }
        } else {
          //Square picked has an image as a child
          if (
            tempSquare &&
            tempSquare.children.length > 0 &&
            tempSquare.classList[3][0] === currentPlayer
          ) {
            moveToEmptySquare(tempSquare, div);
          }
        }
      } else {
        tempSquare.classList.remove("highlight");
        tempSquare = null;
        resetHighlightedSquares();
      }
    });

    // Match the 8th square from the previous row
    if ((i - 1) % 8 === 0) isEven = !isEven;
    div.id = `${columnNumber % 10}${rowNumber}`;

    //[0] = (Column : Row) - What tile it is.
    //Example: 31 = Column 3 : Row 1
    div.classList.add(`${columnNumber % 10}${rowNumber}`);
    //[1] = background colour for css
    div.classList.add(`${isEven ? "even" : "odd"}`);
    div.classList.add("square");
    isEven = !isEven;
    originalSquareBgColors[div.id] = div.style.backgroundColor;

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
  // console.log("BEFORE SWAP");
  // console.log("From: " + swappingFrom.classList);
  // console.log("To: " + swappingTo.classList);
  const pieceClassName = swappingFrom.classList[3];

  if (isValidMove(pieceClassName, swappingFrom, swappingTo)) {
    //isKingBeingTaken(swappingFrom);
    if (!gameStarted) {
      const blackControlsMobile = document.getElementById("black-controls");
      const whiteControlsMobile = document.getElementById("white-controls");

      // console.log("Black Mobile: " + blackControlsMobile);
      // console.log("White Mobile: " + whiteControlsMobile);

      const blackControlsDesktop = document.getElementById("top-controls");
      const whiteControlsDesktop = document.getElementById("bottom-controls");

      // console.log("Black Desktop: " + blackControlsDesktop);
      // console.log("White Desktop: " + whiteControlsDesktop);

      blackControlsDesktop.classList.add("hide");
      whiteControlsDesktop.classList.add("hide");
      blackControlsMobile.classList.add("hide");
      whiteControlsMobile.classList.add("hide");
    }
    // console.log(
    //   "SWAPPING EMPTY SPACE SQAURES ----------------------------------"
    // );
    let img = swappingFrom.querySelector("img");
    swappingFrom.removeChild(img);
    swappingTo.appendChild(img);

    // Remove the class name "start" if it exists
    swappingFrom.classList.remove("start");
    swappingTo.classList.remove("start");

    swappingTo.classList.add(swappingFrom.classList[3]);
    swappingFrom.classList.remove(swappingFrom.classList[3]);

    currentPlayer = currentPlayer === "W" ? "B" : "W";
    playersTurnTitle.style.backgroundColor =
      currentPlayer === "W" ? "White" : "Black";
    playersTurnTitle.style.color = currentPlayer === "W" ? "Black" : "White";
    playersTurnTitle.textContent =
      currentPlayer === "W" ? "White's Turn" : "Black's Turn";
    gameStarted = true;

    //isKingBeingTaken(swappingTo);
    playMoveSound();
  } else {
    // console.log("Invalid move for this piece!");
  }
  // console.log("Game started? " + gameStarted);
  // console.log("AFTER SWAP");
  // console.log("From: " + swappingFrom.classList);
  // console.log("To: " + swappingTo.classList);
  swappingFrom.classList.remove("highlight");
  swappingTo.classList.remove("highlight");
  tempSquare.classList.remove("highlight");
  tempSquare = null;

  resetHighlightedSquares();
};

giveHints = (piecePosition) => {
  switch (piecePosition.classList[3].substring(1)) {
    case "rook":
      // Implement rook movement rules
      return highlightRookSquares(piecePosition);
    case "pawn":
      return highlightPawnSquares(piecePosition);
    case "knight":
      return highlightKnightSquares(piecePosition);
    case "bishop":
      return highlightBishopSquares(piecePosition);
    case "king":
      return highlightKingSquares(piecePosition);
    case "queen":
      return highlightQueenSquares(piecePosition);

    default:
      console.log("None of the cases were met in 'giveHints'");
      return false; // A chess piece was not found
  }
};

moveToFilledSquare = (swappingFrom, swappingTo) => {
  let swappingFromImg = swappingFrom.querySelector("img");
  let swappingToImg = swappingTo.querySelector("img");
  const pieceClassName = swappingFrom.classList[3];
  // console.log("From: " + swappingFrom.classList);
  // console.log("To: " + swappingTo.classList);
  if (swappingFrom.classList[3][0] !== swappingTo.classList[3][0]) {
    if (isValidMove(pieceClassName, swappingFrom, swappingTo)) {
      // if (!gameStarted) {
      //   document.getElementById("set-black").disabled = true;
      //   document.getElementById("set-white").disabled = true;

      //   document.getElementById("set-black").disabled = true;
      //   document.getElementById("set-white").disabled = true;

      //   let setWhiteOptions =
      //     document.getElementsByClassName("set-white-options")[0];
      //   setWhiteOptions.classList.remove("show");
      //   let setBlackOptions =
      //     document.getElementsByClassName("set-black-options")[0];
      //   setBlackOptions.classList.remove("show");
      // }
      /* 
      Check for the first character, it indicates the colour
      W = White
      B = Black 
      */

      //  console.log("Swapping different colours.");
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
        // console.log(
        //   "SWAPPING TWO FILLED SQAURES ----------------------------------"
        // );
        // console.log("BEFORE SWAP");
        // console.log("From: " + swappingFrom.classList);
        // console.log("To: " + swappingTo.classList);

        // console.log("Removing the class name start.");
        swappingFrom.classList.remove("start");
        swappingTo.classList.remove("start");

        if (
          swappingTo.classList.contains("Wking") ||
          swappingTo.classList.contains("Bking")
        ) {
          // If the taken piece is a King, show the modal
          $("#kingTakenModal").modal("show");
          currentPlayer = "W";
          chessBoard.innerHTML = "";
          playersTurnTitle.style.backgroundColor = "White";
          playersTurnTitle.style.color = "Black";
          playersTurnTitle.innerHTML = "White's Turn";
          // chosenWhiteChessSet = "white/images/";
          // chosenBlackChessSet = "black/images/";
          generateNewChessBoard(chessBoard);

          const blackControlsMobile = document.getElementById("black-controls");
          const whiteControlsMobile = document.getElementById("white-controls");

          const blackControlsDesktop = document.getElementById("top-controls");
          const whiteControlsDesktop =
            document.getElementById("bottom-controls");

          blackControlsDesktop.classList.remove("hide");
          whiteControlsDesktop.classList.remove("hide");
          blackControlsMobile.classList.remove("hide");
          whiteControlsMobile.classList.remove("hide");

          const playersTurn = document.getElementById("players-turn");

          playersTurn.innerHTML = "White's turn";
          playersTurn.textContent = "White's turn";
          let whiteButton = document.getElementById("set-white");
          let blackButton = document.getElementById("set-black");
          // Remove the "hide" class and enable the buttons
          whiteButton.classList.remove("hide");
          blackButton.classList.remove("hide");
          whiteButton.disabled = false;
          blackButton.disabled = false;

          gameStarted = false;
        }

        swappingTo.classList.remove(swappingTo.classList[3]);
        swappingTo.classList.add(swappingFrom.classList[3]);
        swappingFrom.classList.remove(swappingFrom.classList[3]);
        // console.log("AFTER SWAP");
        // console.log("From: " + swappingFrom.classList);
        // console.log("To: " + swappingTo.classList);

        currentPlayer = currentPlayer === "W" ? "B" : "W";
        playersTurnTitle.style.backgroundColor =
          currentPlayer === "W" ? "White" : "Black";
        playersTurnTitle.style.color =
          currentPlayer === "W" ? "Black" : "White";
        playersTurnTitle.textContent =
          currentPlayer === "W" ? "White's Turn" : "Black's Turn";
        //playersTurnTitle.style.color = currentPlayer === "W" ? "Red" : "Green";

        gameStarted = true;
        // console.log("Squares swapped.");
        // isKingBeingTaken(swappingTo);
        // console.log("SWAPPING TO: " + swappingTo);
        playTakeSound();
      }
    }
  } else {
    // console.log("Invalid movement.");
  }
  //  console.log("Game started? " + gameStarted);

  tempSquare.classList.remove("highlight");
  tempSquare = null;

  swappingFrom.classList.remove("highlight");
  swappingTo.classList.remove("highlight");
  resetHighlightedSquares();
};

function isValidMove(pieceClassName, fromSquare, toSquare) {
  // console.log("Piece classList: " + pieceClassName);
  // Implement rules for each chess piece
  switch (pieceClassName.substring(1)) {
    case "rook":
      // Implement rook movement rules
      return isValidRookMove(fromSquare, toSquare);
    case "pawn":
      return isValidPawnMove(fromSquare, toSquare);
    case "knight":
      return isValidKnightMove(fromSquare, toSquare);
    case "bishop":
      return isValidBishopMove(fromSquare, toSquare);
    case "king":
      return isValidKingMove(fromSquare, toSquare);
    case "queen":
      return isValidQueenMove(fromSquare, toSquare);

    default:
      //  console.log("None of the cases were met in 'isValidMove'");
      return false; // A chess piece was not found
  }
}

function tileLocator(square) {
  // Assuming class name format is "XY" where X is the column and Y is the row
  const id = square.id;
  // console.log("Id:" + id, square);
  const column = parseInt(id[0]);
  const row = parseInt(id[1]);

  return { column, row };
}

function resetHighlightedSquares() {
  const squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.classList.remove("hint");
    square.classList.remove("attack");
    square.style.backgroundColor = originalSquareBgColors[square.id];
  });
}

function generateNewChessBoard(chessBoard) {
  currentPlayer = "W";

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
        if (!tempSquare && div.classList[3][0] === currentPlayer) {
          giveHints(div);
        }
        if (div.children.length > 0) {
          // Revert the background color of the previously clicked square
          if (tempSquare) {
            tempSquare.style.backgroundColor =
              originalSquareBgColors[tempSquare.classList[0]];

            if (
              tempSquare.children.length > 0 &&
              tempSquare.classList[3][0] === currentPlayer &&
              tempSquare.classList[3][0] !== div.classList[3][0]
            ) {
              moveToFilledSquare(tempSquare, div);
              tempSquare = null;
            }
          } else {
            if (div.classList[3][0] === currentPlayer) {
              // highlight the clicked square
              tempSquare = div;
              // tempSquare.style.backgroundColor = "#ffff33";
              tempSquare.classList.add("highlight");
            }
          }
        } else {
          //Square picked has an image as a child
          if (
            tempSquare &&
            tempSquare.children.length > 0 &&
            tempSquare.classList[3][0] === currentPlayer
          ) {
            moveToEmptySquare(tempSquare, div);
          }
        }
      } else {
        tempSquare.classList.remove("highlight");
        tempSquare = null;
        resetHighlightedSquares();
      }
    });

    // Match the 8th square from the previous row
    if ((i - 1) % 8 === 0) isEven = !isEven;
    div.id = `${columnNumber % 10}${rowNumber}`;

    //[0] = (Column : Row) - What tile it is.
    //Example: 31 = Column 3 : Row 1
    div.classList.add(`${columnNumber % 10}${rowNumber}`);
    //[1] = background colour for css
    div.classList.add(`${isEven ? "even" : "odd"}`);
    div.classList.add("square");
    isEven = !isEven;
    originalSquareBgColors[div.id] = div.style.backgroundColor;

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
}

// Function to create and append an image to a square
function addImageToSquare(square, imageName) {
  let img = document.createElement("img");
  img.src =
    imageName[0] === "W"
      ? chosenWhiteChessSet + imageName
      : chosenBlackChessSet + imageName; // Path to the image
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

function playMoveSound() {
  var moveSound = document.getElementById("moveSound");
  moveSound.play();
}

function playTakeSound() {
  var takeSound = document.getElementById("takeSound");
  takeSound.play();
}
