function isKingBeingTaken(position) {
  //const fromTileLocation = tileLocator(position);
  const fromColour = position.classList[3][0];
  const oppositeColour = fromColour === "W" ? "B" : "W";

  let pawnSquares = document.querySelectorAll("." + oppositeColour + "pawn");
  // console.log("Pawn length" + pawnSquares.length);
  let knightSquares = document.querySelectorAll(
    "." + oppositeColour + "knight"
  );
  let bishopSquares = document.querySelectorAll(
    "." + oppositeColour + "bishop"
  );
  let rookSquares = document.querySelectorAll("." + oppositeColour + "rook");
  let queenSquares = document.querySelectorAll("." + oppositeColour + "queen");

  pawnSquares.forEach((pawn) => {
    isPawnTakingKing(pawn);
  });

  // for (let knight in knightSquares) {
  //   isKnightTakingKing(knight);
  // }

  // for (let bishop in bishopSquares) {
  //   isBishopTakingKing(bishop);
  // }

  // for (let rook in rookSquares) {
  //   isRookTakingKing(rook);
  // }

  // for (let queen in queenSquares) {
  //   isQueenTakingKing(queen);
  // }
}
