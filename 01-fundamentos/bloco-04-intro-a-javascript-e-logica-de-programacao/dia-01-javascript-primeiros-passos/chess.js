let piece = "queen"

switch (piece) {
    case "king":
      console.log("1 movement to the sides or diagonals");
      break;
    case "queen":
        console.log("verticall, horizontal and diagonals");
        break;
    case "bishop":
        console.log("diagonals");
        break;
    case "knight":
        console.log("L movement");
        break;
    case "rook":
        console.log("verticall & horizontal");
        break;
    case "pawn":
        console.log("1 horizontal movement")        
}