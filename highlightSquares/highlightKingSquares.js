function highlightKingSquares(position) {
  const fromTileLocation = tileLocator(position);
  const fromColour = position.classList[3][0];

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
