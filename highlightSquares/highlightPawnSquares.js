// function highlightPawnSquares(position) {
//   const fromTileLocation = tileLocator(position);

//   const fromColour = position.classList[3][0];

//   if (position.classList.contains("start")) {
//     if (fromColour === "W") {
//       if (
//         !(
//           document.getElementById(
//             `${fromTileLocation.column}${fromTileLocation.row - 2}`
//           ).children.length > 0
//         )
//       ) {
//         document
//           .getElementById(
//             `${fromTileLocation.column}${fromTileLocation.row - 2}`
//           )
//           .classList.add("hint");
//       }
//       if (
//         !(
//           document.getElementById(
//             `${fromTileLocation.column}${fromTileLocation.row - 1}`
//           ).children.length > 0
//         )
//       ) {
//         document
//           .getElementById(
//             `${fromTileLocation.column}${fromTileLocation.row - 1}`
//           )
//           .classList.add("hint");
//       }
//     }
//     if (fromColour === "B") {
//       if (
//         !(
//           document.getElementById(
//             `${fromTileLocation.column}${fromTileLocation.row + 2}`
//           ).children.length > 0
//         )
//       ) {
//         document
//           .getElementById(
//             `${fromTileLocation.column}${fromTileLocation.row + 2}`
//           )
//           .classList.add("hint");
//       }
//       if (
//         !(
//           document.getElementById(
//             `${fromTileLocation.column}${fromTileLocation.row + 1}`
//           ).children.length > 0
//         )
//       ) {
//         document
//           .getElementById(
//             `${fromTileLocation.column}${fromTileLocation.row + 1}`
//           )
//           .classList.add("hint");
//       }
//     }
//   }
//   if (fromColour === "W") {
//     //One square up
//     if (
//       !(
//         document.getElementById(
//           `${fromTileLocation.column}${fromTileLocation.row - 1}`
//         ).children.length > 0
//       )
//     ) {
//       document
//         .getElementById(`${fromTileLocation.column}${fromTileLocation.row - 1}`)
//         .classList.add("hint");
//     }

//     //Up + Left
//     if (
//       document.getElementById(
//         `${fromTileLocation.column - 1}${fromTileLocation.row - 1}`
//       ).children.length > 0
//     ) {
//       document
//         .getElementById(
//           `${fromTileLocation.column - 1}${fromTileLocation.row - 1}`
//         )
//         .classList.add("attack");
//     }
//     //Up + Right
//     if (
//       document.getElementById(
//         `${fromTileLocation.column + 1}${fromTileLocation.row - 1}`
//       ).children.length > 0
//     ) {
//       document
//         .getElementById(
//           `${fromTileLocation.column + 1}${fromTileLocation.row - 1}`
//         )
//         .classList.add("attack");
//     }
//   }
//   if (fromColour === "B") {
//     if (
//       !(
//         document.getElementById(
//           `${fromTileLocation.column}${fromTileLocation.row + 1}`
//         ).children.length > 0
//       )
//     ) {
//       document
//         .getElementById(`${fromTileLocation.column}${fromTileLocation.row + 1}`)
//         .classList.add("hint");
//     }

//     //Down + Left
//     if (
//       document.getElementById(
//         `${fromTileLocation.column - 1}${fromTileLocation.row + 1}`
//       ).children.length > 0
//     ) {
//       document
//         .getElementById(
//           `${fromTileLocation.column - 1}${fromTileLocation.row + 1}`
//         )
//         .classList.add("attack");
//     }
//     //Down + Right
//     if (
//       document.getElementById(
//         `${fromTileLocation.column + 1}${fromTileLocation.row + 1}`
//       ).children.length > 0
//     ) {
//       document
//         .getElementById(
//           `${fromTileLocation.column + 1}${fromTileLocation.row + 1}`
//         )
//         .classList.add("attack");
//     }
//   }
// }

function highlightPawnSquares(position) {
  const fromTileLocation = tileLocator(position);
  const fromColour = position.classList[3][0];

  if (position.classList.contains("start")) {
    if (fromColour === "W") {
      if (
        fromTileLocation.row - 2 >= 1 &&
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
        fromTileLocation.row - 1 >= 1 &&
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
    } else if (fromColour === "B") {
      if (
        fromTileLocation.row + 2 <= 8 &&
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
        fromTileLocation.row + 1 <= 8 &&
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
      fromTileLocation.row - 1 >= 1 &&
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
      fromTileLocation.column - 1 >= 1 &&
      fromTileLocation.row - 1 >= 1 &&
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
    //Up + Right
    if (
      fromTileLocation.column + 1 <= 8 &&
      fromTileLocation.row - 1 >= 1 &&
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
  } else if (fromColour === "B") {
    if (
      fromTileLocation.row + 1 <= 8 &&
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
      fromTileLocation.column - 1 >= 1 &&
      fromTileLocation.row + 1 <= 8 &&
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
    //Down + Right
    if (
      fromTileLocation.column + 1 <= 8 &&
      fromTileLocation.row + 1 <= 8 &&
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
