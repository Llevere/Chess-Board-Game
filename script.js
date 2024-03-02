document.addEventListener("DOMContentLoaded", function () {
  let chestPiecesList = document.getElementById("chest-pieces");

  // Function to create and append an image to a square
  function addImageToSquare(square, imageName) {
    let img = document.createElement("img");
    img.src = "/images/" + imageName; // Path to the image
    //img.draggable = true; // Enable dragging
    img.addEventListener("click", function (event) {
      console.log("Image clicked");
    });
    // img.addEventListener("dragstart", function (event) {
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

  // Start at 1 to keep it readable (Column 1, Row 1)
  for (let i = 1; i < 9; i++) {
    let div = document.createElement("div");

    // Row
    div.className = `${i} row`;

    let isEven = i % 2 === 0;
    const numOfColumns = 9;
    for (let j = 1; j < numOfColumns; j++) {
      let li = document.createElement("li");

      //Create the coordinates on the board (Row : Column)
      li.className = `${i}${j} ${isEven ? "even" : "odd"} square`;

      li.style.backgroundColor = isEven ? evenColour : oddColour;
      //li.style.border = `1px solid ${isEven ? "#ebecd0" : "#739552"}`;
      li.style.border = "none";
      li.style.margin = 0;
      li.style.padding = 0;
      li.style.width = "75px";
      li.style.height = "75px";
      isEven = !isEven;
      //On the 8th column, switch tile colours
      if (i % 2 === 0 && j === numOfColumns - 1) {
        isEven = !isEven;
      }

      //   li.addEventListener("drop", function (event) {
      //     event.preventDefault();
      //     let imageName = event.dataTransfer.getData("text/plain");
      //     let draggedImage = document.createElement("img");
      //     draggedImage.src = "images/" + imageName;

      //     // // Swap images if the square already contains an image
      //     if (li.children.length > 0) {
      //       let existingImage = li.children[0];
      //       li.removeChild(existingImage);
      //       addImageToSquare(li, imageName);
      //       draggedImage.src = existingImage.src;
      //     }
      //     li.appendChild(draggedImage);
      //   });

      //   li.addEventListener("dragover", function (event) {
      //     event.preventDefault();
      //   });

      // Black pieces row 1
      if (i === 1 && j === 1) {
        // Row : Column
        addImageToSquare(li, "Brook.png");
      }
      if (i === 1 && j === 2) {
        // Row : Column
        addImageToSquare(li, "Bknight.png");
      }
      if (i === 1 && j === 3) {
        // Row : Column
        addImageToSquare(li, "Bbishop.png");
      }
      if (i === 1 && j === 4) {
        // Row : Column
        addImageToSquare(li, "Bqueen.png");
      }
      if (i === 1 && j === 5) {
        // Row : Column
        addImageToSquare(li, "Bking.png");
      }
      if (i === 1 && j === 6) {
        // Row : Column
        addImageToSquare(li, "Bbishop.png");
      }
      if (i === 1 && j === 7) {
        // Row : Column
        addImageToSquare(li, "Bknight.png");
      }
      if (i === 1 && j === 8) {
        // Row : Column
        addImageToSquare(li, "Brook.png");
      }
      // Black pieces row 2
      if (i === 2 && j === 1) {
        // Row : Column
        addImageToSquare(li, "Bpawn.png");
      }
      if (i === 2 && j === 2) {
        // Row : Column
        addImageToSquare(li, "Bpawn.png");
      }
      if (i === 2 && j === 3) {
        // Row : Column
        addImageToSquare(li, "Bpawn.png");
      }
      if (i === 2 && j === 4) {
        // Row : Column
        addImageToSquare(li, "Bpawn.png");
      }
      if (i === 2 && j === 5) {
        // Row : Column
        addImageToSquare(li, "Bpawn.png");
      }
      if (i === 2 && j === 6) {
        // Row : Column
        addImageToSquare(li, "Bpawn.png");
      }
      if (i === 2 && j === 7) {
        // Row : Column
        addImageToSquare(li, "Bpawn.png");
      }
      if (i === 2 && j === 8) {
        // Row : Column
        addImageToSquare(li, "Bpawn.png");
      }

      // White pieces row 7

      if (i === 7 && j === 1) {
        // Row : Column
        addImageToSquare(li, "Wrook.png");
      }
      if (i === 7 && j === 2) {
        // Row : Column
        addImageToSquare(li, "Wknight.png");
      }
      if (i === 7 && j === 3) {
        // Row : Column
        addImageToSquare(li, "Wbishop.png");
      }
      if (i === 7 && j === 4) {
        // Row : Column
        addImageToSquare(li, "Wqueen.png");
      }
      if (i === 7 && j === 5) {
        // Row : Column
        addImageToSquare(li, "Wking.png");
      }
      if (i === 7 && j === 6) {
        // Row : Column
        addImageToSquare(li, "Wbishop.png");
      }
      if (i === 7 && j === 7) {
        // Row : Column
        addImageToSquare(li, "Wknight.png");
      }
      if (i === 7 && j === 8) {
        // Row : Column
        addImageToSquare(li, "Wrook.png");
      }

      // White pieces row 8
      if (i === 8 && j === 1) {
        // Row : Column
        addImageToSquare(li, "Wpawn.png");
      }
      if (i === 8 && j === 2) {
        // Row : Column
        addImageToSquare(li, "Wpawn.png");
      }
      if (i === 8 && j === 3) {
        // Row : Column
        addImageToSquare(li, "Wpawn.png");
      }
      if (i === 8 && j === 4) {
        // Row : Column
        addImageToSquare(li, "Wpawn.png");
      }
      if (i === 8 && j === 5) {
        // Row : Column
        addImageToSquare(li, "Wpawn.png");
      }
      if (i === 8 && j === 6) {
        // Row : Column
        addImageToSquare(li, "Wpawn.png");
      }
      if (i === 8 && j === 7) {
        // Row : Column
        addImageToSquare(li, "Wpawn.png");
      }
      if (i === 8 && j === 8) {
        // Row : Column
        addImageToSquare(li, "Wpawn.png");
      }
      div.appendChild(li);
    }
    chestPiecesList.appendChild(div); // Append the list item to the chest-pieces list
  }

  //   // Drag and drop events
  //   chestPiecesList.addEventListener("dragstart", function (event) {
  //     // Handle drag start
  //     console.log("Drag started");
  //   });

  //   chestPiecesList.addEventListener("dragover", function (event) {
  //     // Handle drag over
  //     console.log("Drag over");
  //   });

  //   chestPiecesList.addEventListener("drop", function (event) {
  //     // Handle drop
  //     console.log("Drop");
  //   });

  //let resetButton = document.getElementById("reset-btn");

  //   resetButton.addEventListener("click", function () {
  //     let btn = document.getElementById("reset-btn");
  //     btn.style.animation = "pressAnimation 0.2s ease";
  //     btn.addEventListener("animationend", () => {
  //       btn.style.animation = ""; // Reset animation after it ends
  //     });

  //     let temp = evenColour;
  //     evenColour = oddColour;
  //     oddColour = temp;

  //     updateSquareColors(resetButton);
  //   });
  let selectedPiece = null;
  let selectedSquare = null;

  let tempSquare = null;
  let tempSquareBgColour = "";
  let originalSquareBgColors = {};

  let squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
    // Store the original background color of the square
    originalSquareBgColors[square.classList[1]] = square.style.backgroundColor;

    square.addEventListener("click", function () {
      // Revert the background color of the previously clicked square
      if (tempSquare) {
        tempSquare.style.backgroundColor =
          originalSquareBgColors[tempSquare.classList[1]];
      }

      // Highlight the clicked square
      tempSquare = square;
      tempSquare.style.backgroundColor = "#ffff33";
    });
  });

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
