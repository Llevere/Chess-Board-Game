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
    img.addEventListener("click", function (event) {
      console.log("Image clicked");
    });
    img.style.height = "100%";
    img.style.width = "100%";
    // img.addEventdivstener("dragstart", function (event) {
    //   console.log("Image being dragged");
    //   event.dataTransfer.setData("text/plain", imageName);
    //   event.dataTransfer.setDragImage("./images/" + imageName, 25, 35);
    // });
    square.appendChild(img);
  }

  // Function to update the background color of squares
  function updateSquareColors(resetBtn) {
    let squares = document.querySelectorAll(".square");

    //Starting at index 0; An even number
    let isEven = true;
    for (let i = 0; i < squares.length; i++) {
      if (i % 8 === 0) isEven = !isEven;

      squares[i].style.backgroundColor = isEven ? evenColour : oddColour;

      isEven = !isEven;
    }
  }

  let evenColour = "#ebecd0";
  let oddColour = "#739552";

  let rowNumber = 1;

  //Start at one because once rowCounter hits 8 on the last square,
  // columnCounter will not increment again.
  //This is for an 8x8 grid.
  let columnNumber = 1;

  //let squares = document.querySelectorAll(".square");

  //  squares.forEach((square) => {
  //    // Store the original background color of the square
  //    //originalSquareBgColors[square.classList[0]] = square.style.backgroundColor;

  //   //  square.addEventListener("click", function () {
  //   //    if (square.children.length > 0) {
  //   //      // Revert the background color of the previously cdivcked square
  //   //      if (tempSquare) {
  //   //        tempSquare.style.backgroundColor =
  //   //          originalSquareBgColors[tempSquare.classList[0]];
  //   //      }

  //   //      // Highdivght the cdivcked square
  //   //      tempSquare = square;
  //   //      tempSquare.style.backgroundColor = "#ffff33";
  //   //    }
  //   //  });
  //  });
  let isEven = false;
  for (let i = 1; i < 65; i++) {
    //Reset the row counter. 8th square was created.
    //Column created, increment column counter.
    if (rowNumber === 9) {
      rowNumber = 1;
      columnNumber++;
    }
    let div = document.createElement("div");
    div.addEventListener("click", function () {
      if (div.children.length > 0) {
        // Revert the background color of the previously cdivcked square
        if (tempSquare) {
          tempSquare.style.backgroundColor =
            originalSquareBgColors[tempSquare.classList[0]];
        }

        // Highdivght the cdivcked square
        tempSquare = div;
        tempSquare.style.backgroundColor = "#ffff33";
      }
    });

    // Match the 8th square from the previous row
    if ((i - 1) % 8 === 0) isEven = !isEven;
    div.className = `${columnNumber}${rowNumber % 10} ${
      isEven ? "even" : "odd"
    } square`;
    isEven = !isEven;
    originalSquareBgColors[div.classList[0]] = div.style.backgroundColor;
    //for (let j = 1; j < numOfColumns; j++) {

    //Create the coordinates on the board (Column : Row)
    //div.className = `${j}${i} ${isEven ? "even" : "odd"} square`;

    //div.style.backgroundColor = isEven ? evenColour : oddColour;
    //div.style.border = `1px sodivd ${isEven ? "#ebecd0" : "#739552"}`;

    //   div.style.width = "75px";
    //   div.style.height = "75px";

    //On the 8th column, switch tile colours
    // if (i % 2 === 0 && j === numOfColumns - 1) {
    //   isEven = !isEven;
    // }

    //   div.addEventdivstener("drop", function (event) {
    //     event.preventDefault();
    //     let imageName = event.dataTransfer.getData("text/plain");
    //     let draggedImage = document.createElement("img");
    //     draggedImage.src = "images/" + imageName;

    //     // // Swap images if the square already contains an image
    //     if (div.children.length > 0) {
    //       let existingImage = div.children[0];
    //       div.removeChild(existingImage);
    //       addImageToSquare(div, imageName);
    //       draggedImage.src = existingImage.src;
    //     }
    //     div.appendChild(draggedImage);
    //   });

    //   div.addEventdivstener("dragover", function (event) {
    //     event.preventDefault();
    //   });

    //Black pieces row 1
    if (i === 64 && columnNumber === 8) {
      // placeholder
      addImageToSquare(div, "Brook.png");
    }
    if (i === 63 && columnNumber === 8) {
      // placeholder
      addImageToSquare(div, "Bknight.png");
    }
    if (i === 62 && columnNumber === 8) {
      // placeholder
      addImageToSquare(div, "Bbishop.png");
    }
    if (i === 61 && columnNumber === 8) {
      // placeholder
      addImageToSquare(div, "Bqueen.png");
    }
    if (i === 60 && columnNumber === 8) {
      // placeholder
      addImageToSquare(div, "Bking.png");
    }
    if (i === 59 && columnNumber === 8) {
      // placeholder
      addImageToSquare(div, "Bbishop.png");
    }
    if (i === 58 && columnNumber === 8) {
      // placeholder
      addImageToSquare(div, "Bknight.png");
    }
    if (i === 57 && columnNumber === 8) {
      // placeholder
      addImageToSquare(div, "Brook.png");
    }
    // Black pieces row 2
    if (i === 49 && columnNumber === 7) {
      // placeholder
      addImageToSquare(div, "Bpawn.png");
    }
    if (i === 50 && columnNumber === 7) {
      // placeholder
      addImageToSquare(div, "Bpawn.png");
    }
    if (i === 51 && columnNumber === 7) {
      // placeholder
      addImageToSquare(div, "Bpawn.png");
    }
    if (i === 52 && columnNumber === 7) {
      // placeholder
      addImageToSquare(div, "Bpawn.png");
    }
    if (i === 53 && columnNumber === 7) {
      // placeholder
      addImageToSquare(div, "Bpawn.png");
    }
    if (i === 54 && columnNumber === 7) {
      // placeholder
      addImageToSquare(div, "Bpawn.png");
    }
    if (i === 55 && columnNumber === 7) {
      // placeholder
      addImageToSquare(div, "Bpawn.png");
    }
    if (i === 56 && columnNumber === 7) {
      // placeholder
      addImageToSquare(div, "Bpawn.png");
    }

    // White pieces row 7

    if (i === 1 && columnNumber === 1) {
      // placeholder
      addImageToSquare(div, "Wrook.png");
    }
    if (i === 2 && columnNumber === 1) {
      // placeholder
      addImageToSquare(div, "Wknight.png");
    }
    if (i === 3 && columnNumber === 1) {
      // placeholder
      addImageToSquare(div, "Wbishop.png");
    }
    if (i === 4 && columnNumber === 1) {
      // placeholder
      addImageToSquare(div, "Wqueen.png");
    }
    if (i === 5 && columnNumber === 1) {
      // placeholder
      addImageToSquare(div, "Wking.png");
    }
    if (i === 6 && columnNumber === 1) {
      // placeholder
      addImageToSquare(div, "Wbishop.png");
    }
    if (i === 7 && columnNumber === 1) {
      // placeholder
      addImageToSquare(div, "Wknight.png");
    }
    if (i === 8 && columnNumber === 1) {
      // placeholder
      addImageToSquare(div, "Wrook.png");
    }

    // White pieces row 8
    if (i === 16 && columnNumber === 2) {
      // placeholder
      addImageToSquare(div, "Wpawn.png");
    }
    if (i === 15 && columnNumber === 2) {
      // placeholder
      addImageToSquare(div, "Wpawn.png");
    }
    if (i === 14 && columnNumber === 2) {
      // placeholder
      addImageToSquare(div, "Wpawn.png");
    }
    if (i === 13 && columnNumber === 2) {
      // placeholder
      addImageToSquare(div, "Wpawn.png");
    }
    if (i === 12 && columnNumber === 2) {
      // placeholder
      addImageToSquare(div, "Wpawn.png");
    }
    if (i === 11 && columnNumber === 2) {
      // placeholder
      addImageToSquare(div, "Wpawn.png");
    }
    if (i === 10 && columnNumber === 2) {
      // placeholder
      addImageToSquare(div, "Wpawn.png");
    }
    if (i === 9 && columnNumber === 2) {
      // placeholder
      addImageToSquare(div, "Wpawn.png");
    }
    //   div.appendChild(div);
    // }
    // chestPiecesdivst.appendChild(div); // Append the divst item to the chest-pieces divst

    chessBoard.appendChild(div);
    rowNumber++;
  }

  //   // Drag and drop events
  //   chestPiecesdivst.addEventdivstener("dragstart", function (event) {
  //     // Handle drag start
  //     console.log("Drag started");
  //   });

  //   chestPiecesdivst.addEventdivstener("dragover", function (event) {
  //     // Handle drag over
  //     console.log("Drag over");
  //   });

  //   chestPiecesdivst.addEventdivstener("drop", function (event) {
  //     // Handle drop
  //     console.log("Drop");
  //   });

  //let resetButton = document.getElementById("reset-btn");

  //   resetButton.addEventdivstener("cdivck", function () {
  //     let btn = document.getElementById("reset-btn");
  //     btn.style.animation = "pressAnimation 0.2s ease";
  //     btn.addEventdivstener("animationend", () => {
  //       btn.style.animation = ""; // Reset animation after it ends
  //     });

  //     let temp = evenColour;
  //     evenColour = oddColour;
  //     oddColour = temp;

  //     updateSquareColors(resetButton);
  //   });

  //   if (square.children.length > 0) {
  //     // If the square has a piece
  //     // Store the selected piece and square
  //     selectedPiece = square.children[0];
  //     selectedSquare = square;
  //   } else if (selectedPiece) {
  //     // If a piece is selected and the square is empty
  //     // Check if the destination square already has a piece
  //     if (square.children.length > 0) {
  //       // Swap the pieces between the two squares
  //       let destinationPiece = square.children[0];

  //       // Remove the destination piece from its square
  //       square.removeChild(destinationPiece);

  //       // Append the selected piece to the destination square
  //       square.appendChild(selectedPiece);

  //       // Append the destination piece to the original square of the selected piece
  //       selectedSquare.appendChild(destinationPiece);
  //     } else {
  //       // If the destination square is empty, move the piece to the new square
  //       square.appendChild(selectedPiece);
  //     }

  //     // Clear the selected piece and square for the next move
  //     selectedPiece = null;
  //     selectedSquare = null;
  //   }
  //     });
  //   });
});
