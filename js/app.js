let columns = 7;
let rows = 6;

//get the container element
const boardElement = document.getElementById("board");

//storing the board state
const gameBoard = [];

//generates the board
function makeBoard() {
  for (let i = 0; i < rows; i++) {
    gameBoard[i] = [];
    for (let j = 0; j < columns; j++) {
      const circle = document.createElement("div");
      circle.className = "tile";
      circle.id = "tile_id";
      //add it to board
      boardElement.appendChild(circle);

      gameBoard[i][j] = "0";
    }
  }
}
console.log(gameBoard);
makeBoard();

function restart() {
  const resetTiles = document.getElementsByClassName("tile");
  for (let i = 0; i < resetTiles.length; i++) {
    resetTiles[i].style.backgroundColor = "white";
  }
}
