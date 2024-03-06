function highlightPawnSquares(position) {
  const fromTileLocation = tileLocator(position);

  const fromColour = position.classList[3][0];

  if (position.classList.contains("start")) {
    if (fromColour === "W") {
      if (
        !(
          document.getElementById(
            `${fromTileLocation.column}${fromTileLocation.row - 2}`
          ).children.length > 0
        )
      ) {
        document
          .getElementById(
            `${fromTileLocation.column}${fromTileLocation.row - 2}`
          )
          .classList.add("hint");
      }
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
    }
    if (fromColour === "B") {
      if (
        !(
          document.getElementById(
            `${fromTileLocation.column}${fromTileLocation.row + 2}`
          ).children.length > 0
        )
      ) {
        document
          .getElementById(
            `${fromTileLocation.column}${fromTileLocation.row + 2}`
          )
          .classList.add("hint");
      }
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
    }
  }
  if (fromColour === "W") {
    //One square up
    if (
      !(
        document.getElementById(
          `${fromTileLocation.column}${fromTileLocation.row - 1}`
        ).children.length > 0
      )
    ) {
      document
        .getElementById(`${fromTileLocation.column}${fromTileLocation.row - 1}`)
        .classList.add("hint");
    }

    //Up + Left
    if (
      document.getElementById(
        `${fromTileLocation.column - 1}${fromTileLocation.row - 1}`
      ).children.length > 0
    ) {
      document
        .getElementById(
          `${fromTileLocation.column - 1}${fromTileLocation.row - 1}`
        )
        .classList.add("hint");
    }
    //Up + Right
    if (
      document.getElementById(
        `${fromTileLocation.column + 1}${fromTileLocation.row - 1}`
      ).children.length > 0
    ) {
      document
        .getElementById(
          `${fromTileLocation.column + 1}${fromTileLocation.row - 1}`
        )
        .classList.add("hint");
    }
  }
  if (fromColour === "B") {
    if (
      !(
        document.getElementById(
          `${fromTileLocation.column}${fromTileLocation.row + 1}`
        ).children.length > 0
      )
    ) {
      document
        .getElementById(`${fromTileLocation.column}${fromTileLocation.row + 1}`)
        .classList.add("hint");
    }

    //Down + Left
    if (
      document.getElementById(
        `${fromTileLocation.column - 1}${fromTileLocation.row + 1}`
      ).children.length > 0
    ) {
      document
        .getElementById(
          `${fromTileLocation.column - 1}${fromTileLocation.row + 1}`
        )
        .classList.add("hint");
    }
    //Down + Right
    if (
      document.getElementById(
        `${fromTileLocation.column + 1}${fromTileLocation.row + 1}`
      ).children.length > 0
    ) {
      document
        .getElementById(
          `${fromTileLocation.column + 1}${fromTileLocation.row + 1}`
        )
        .classList.add("hint");
    }
  }
}
