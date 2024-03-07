function highlightQueenSquares(position) {
  const fromTileLocation = tileLocator(position);
  const fromColour = position.classList[3][0];

  // Highlight squares diagonally: down-right
  let row = fromTileLocation.row + 1;
  for (
    let column = fromTileLocation.column + 1;
    column <= 8 && row <= 8;
    column++, row++
  ) {
    const square = document.getElementById(`${column}${row}`);
    if (!square.children.length) {
      square.classList.add("hint");
    } else {
      // Check if there are children elements in the square
      if (square.children.length > 0) {
        // Access the first character of the fourth class
        if (square.classList[3][0] !== fromColour) {
          square.classList.add("attack");
        }
      }
      break; // Stop when a piece is encountered
    }
  }

  // Highlight squares diagonally: down-left
  row = fromTileLocation.row + 1;
  for (
    let column = fromTileLocation.column - 1;
    column >= 1 && row <= 8;
    column--, row++
  ) {
    const square = document.getElementById(`${column}${row}`);
    if (!square.children.length) {
      square.classList.add("hint");
    } else {
      // Check if there are children elements in the square
      if (square.children.length > 0) {
        if (square.classList[3][0] !== fromColour) {
          square.classList.add("attack");
        }
      }
      break; // Stop when a piece is encountered
    }
  }

  // Highlight squares diagonally: up-right
  row = fromTileLocation.row - 1;
  for (
    let column = fromTileLocation.column + 1;
    column <= 8 && row >= 1;
    column++, row--
  ) {
    const square = document.getElementById(`${column}${row}`);
    if (!square.children.length) {
      square.classList.add("hint");
    } else {
      // Check if there are children elements in the square
      if (square.children.length > 0) {
        // Access the first character of the fourth class
        if (square.classList[3][0] !== fromColour) {
          square.classList.add("attack");
        }
      }
      break; // Stop when a piece is encountered
    }
  }

  // Highlight squares diagonally: up-left
  row = fromTileLocation.row - 1;
  for (
    let column = fromTileLocation.column - 1;
    column >= 1 && row >= 1;
    column--, row--
  ) {
    const square = document.getElementById(`${column}${row}`);
    if (!square.children.length) {
      square.classList.add("hint");
    } else {
      // Check if there are children elements in the square
      if (square.children.length > 0) {
        // Access the first character of the fourth class
        if (square.classList[3][0] !== fromColour) {
          square.classList.add("attack");
        }
      }
      break; // Stop when a piece is encountered
    }
  }

  //Check all columns within the same row to the right of the rook
  for (let i = fromTileLocation.column + 1; i < 9; i++) {
    if (
      !(
        document.getElementById(`${i}${fromTileLocation.row}`).children.length >
        0
      )
    ) {
      document
        .getElementById(`${i}${fromTileLocation.row}`)
        .classList.add("hint");
    }
    if (
      document.getElementById(`${i}${fromTileLocation.row}`).children.length > 0
    ) {
      if (
        document.getElementById(`${i}${fromTileLocation.row}`)
          .classList[3][0] !== fromColour
      ) {
        document
          .getElementById(`${i}${fromTileLocation.row}`)
          .classList.add("attack");
      }
      break;
    }
  }

  //Check all columns within the same row to the left of the rook
  for (let i = fromTileLocation.column - 1; i > 0; i--) {
    //const square = document.getElementById(`${i}${fromTileLocation.row}`);
    if (
      !(
        document.getElementById(`${i}${fromTileLocation.row}`).children.length >
        0
      )
    ) {
      document
        .getElementById(`${i}${fromTileLocation.row}`)
        .classList.add("hint");
    }
    if (
      document.getElementById(`${i}${fromTileLocation.row}`).children.length > 0
    ) {
      if (
        document.getElementById(`${i}${fromTileLocation.row}`)
          .classList[3][0] !== fromColour
      ) {
        document
          .getElementById(`${i}${fromTileLocation.row}`)
          .classList.add("attack");
      }
      break;
    }
  }

  if (fromTileLocation.row + 1 < 9) {
    //Check all columns within the same row to the right of the rook
    for (let i = fromTileLocation.row + 1; i < 9; i++) {
      if (
        !(
          document.getElementById(`${fromTileLocation.column}${i}`).children
            .length > 0
        )
      ) {
        document
          .getElementById(`${fromTileLocation.column}${i}`)
          .classList.add("hint");
      }
      if (
        document.getElementById(`${fromTileLocation.column}${i}`).children
          .length > 0
      ) {
        if (
          document.getElementById(`${fromTileLocation.column}${i}`)
            .classList[3][0] !== fromColour
        ) {
          document
            .getElementById(`${fromTileLocation.column}${i}`)
            .classList.add("attack");
        }
        break;
      }
    }
  }

  //Check all columns within the same row to the right of the rook
  for (let i = fromTileLocation.row - 1; i > 0; i--) {
    if (
      !(
        document.getElementById(`${fromTileLocation.column}${i}`).children
          .length > 0
      )
    ) {
      document
        .getElementById(`${fromTileLocation.column}${i}`)
        .classList.add("hint");
    }
    if (
      document.getElementById(`${fromTileLocation.column}${i}`).children
        .length > 0
    ) {
      if (
        document.getElementById(`${fromTileLocation.column}${i}`)
          .classList[3][0] !== fromColour
      ) {
        document
          .getElementById(`${fromTileLocation.column}${i}`)
          .classList.add("attack");
      }
      break;
    }
  }

  if (
    fromTileLocation.column - 1 > 0 ||
    fromTileLocation.column + 1 < 9 ||
    fromTileLocation.row - 1 > 0 ||
    fromTileLocation.row + 1 < 9
  ) {
    //Checking all 3 tiles above
    if (fromTileLocation.row - 1 > 0) {
      //Check one tile above
      if (
        !(
          document.getElementById(
            `${fromTileLocation.column}${fromTileLocation.row - 1}`
          ).children.length > 0
        )
      ) {
        document
          .getElementById(
            `${fromTileLocation.column}${fromTileLocation.row - 1}`
          )
          .classList.add("hint");
      }
      if (
        document.getElementById(
          `${fromTileLocation.column}${fromTileLocation.row - 1}`
        ).children.length > 0 &&
        document.getElementById(
          `${fromTileLocation.column}${fromTileLocation.row - 1}`
        ).classList[3][0] !== fromColour
      ) {
        document
          .getElementById(
            `${fromTileLocation.column}${fromTileLocation.row - 1}`
          )
          .classList.add("attack");
      }

      //Check one tile above + to the left
      if (fromTileLocation.column - 1 > 0) {
        if (
          !(
            document.getElementById(
              `${fromTileLocation.column - 1}${fromTileLocation.row - 1}`
            ).children.length > 0
          )
        ) {
          document
            .getElementById(
              `${fromTileLocation.column - 1}${fromTileLocation.row - 1}`
            )
            .classList.add("hint");
        }
        if (
          document.getElementById(
            `${fromTileLocation.column - 1}${fromTileLocation.row - 1}`
          ).children.length > 0 &&
          document.getElementById(
            `${fromTileLocation.column - 1}${fromTileLocation.row - 1}`
          ).classList[3][0] !== fromColour
        ) {
          document
            .getElementById(
              `${fromTileLocation.column - 1}${fromTileLocation.row - 1}`
            )
            .classList.add("attack");
        }
      }
      //Check one tile above + to the right
      if (fromTileLocation.column + 1 < 9) {
        if (
          !(
            document.getElementById(
              `${fromTileLocation.column + 1}${fromTileLocation.row - 1}`
            ).children.length > 0
          )
        ) {
          document
            .getElementById(
              `${fromTileLocation.column + 1}${fromTileLocation.row - 1}`
            )
            .classList.add("hint");
        }
        if (
          document.getElementById(
            `${fromTileLocation.column + 1}${fromTileLocation.row - 1}`
          ).children.length > 0 &&
          document.getElementById(
            `${fromTileLocation.column + 1}${fromTileLocation.row - 1}`
          ).classList[3][0] !== fromColour
        ) {
          document
            .getElementById(
              `${fromTileLocation.column + 1}${fromTileLocation.row - 1}`
            )
            .classList.add("attack");
        }
      }
    }

    //Check left
    if (fromTileLocation.column - 1 > 0) {
      if (
        !(
          document.getElementById(
            `${fromTileLocation.column - 1}${fromTileLocation.row}`
          ).children.length > 0
        )
      ) {
        document
          .getElementById(
            `${fromTileLocation.column - 1}${fromTileLocation.row}`
          )
          .classList.add("hint");
      }
      if (
        document.getElementById(
          `${fromTileLocation.column - 1}${fromTileLocation.row}`
        ).children.length > 0 &&
        document.getElementById(
          `${fromTileLocation.column - 1}${fromTileLocation.row}`
        ).classList[3][0] !== fromColour
      ) {
        document
          .getElementById(
            `${fromTileLocation.column - 1}${fromTileLocation.row}`
          )
          .classList.add("attack");
      }
    }
    //Check right side
    if (fromTileLocation.column + 1 < 9) {
      if (
        !(
          document.getElementById(
            `${fromTileLocation.column + 1}${fromTileLocation.row}`
          ).children.length > 0
        )
      ) {
        document
          .getElementById(
            `${fromTileLocation.column + 1}${fromTileLocation.row}`
          )
          .classList.add("hint");
      }
      if (
        document.getElementById(
          `${fromTileLocation.column + 1}${fromTileLocation.row}`
        ).children.length > 0 &&
        document.getElementById(
          `${fromTileLocation.column + 1}${fromTileLocation.row}`
        ).classList[3][0] !== fromColour
      ) {
        document
          .getElementById(
            `${fromTileLocation.column + 1}${fromTileLocation.row}`
          )
          .classList.add("attack");
      }
    }

    //Check all 3 tiles below
    if (fromTileLocation.row + 1 < 9) {
      //Check one tile above
      if (
        !(
          document.getElementById(
            `${fromTileLocation.column}${fromTileLocation.row + 1}`
          ).children.length > 0
        )
      ) {
        document
          .getElementById(
            `${fromTileLocation.column}${fromTileLocation.row + 1}`
          )
          .classList.add("hint");
      }
      if (
        document.getElementById(
          `${fromTileLocation.column}${fromTileLocation.row + 1}`
        ).children.length > 0 &&
        document.getElementById(
          `${fromTileLocation.column}${fromTileLocation.row + 1}`
        ).classList[3][0] !== fromColour
      ) {
        document
          .getElementById(
            `${fromTileLocation.column}${fromTileLocation.row + 1}`
          )
          .classList.add("attack");
      }

      //Check one tile below + to the left
      if (fromTileLocation.column - 1 > 0) {
        if (
          !(
            document.getElementById(
              `${fromTileLocation.column - 1}${fromTileLocation.row + 1}`
            ).children.length > 0
          )
        ) {
          document
            .getElementById(
              `${fromTileLocation.column - 1}${fromTileLocation.row + 1}`
            )
            .classList.add("hint");
        }
        if (
          document.getElementById(
            `${fromTileLocation.column - 1}${fromTileLocation.row + 1}`
          ).children.length > 0 &&
          document.getElementById(
            `${fromTileLocation.column - 1}${fromTileLocation.row + 1}`
          ).classList[3][0] !== fromColour
        ) {
          document
            .getElementById(
              `${fromTileLocation.column - 1}${fromTileLocation.row + 1}`
            )
            .classList.add("attack");
        }
      }
      //Check one tile above + to the right
      if (fromTileLocation.column + 1 < 9) {
        if (
          !(
            document.getElementById(
              `${fromTileLocation.column + 1}${fromTileLocation.row + 1}`
            ).children.length > 0
          )
        ) {
          document
            .getElementById(
              `${fromTileLocation.column + 1}${fromTileLocation.row + 1}`
            )
            .classList.add("hint");
        }
        if (
          document.getElementById(
            `${fromTileLocation.column + 1}${fromTileLocation.row + 1}`
          ).children.length > 0 &&
          document.getElementById(
            `${fromTileLocation.column + 1}${fromTileLocation.row + 1}`
          ).classList[3][0] !== fromColour
        ) {
          document
            .getElementById(
              `${fromTileLocation.column + 1}${fromTileLocation.row + 1}`
            )
            .classList.add("attack");
        }
      }
    }
  }
}
