let columns = 7;
let rows = 7;

//get the container element
const boardElement = document.getElementById("board");

//storing the board state
const gameBoard = [];

//generates the board
function makeBoard() {
  for (let x = 0; x < columns; x++) {
    gameBoard[x] = [];
    const column = document.createElement("col");
    boardElement.appendChild(column);
    for (let y = 0; y < rows; y++) {
      const circle = document.createElement("tr");
      circle.className = "tile";
      circle.id = "tile_id" + [y] + "-" + [x];
      //add it to board
      boardElement.appendChild(circle);

      gameBoard[x][y] = 0;
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

//use classList.toggle to toggle between red and yellow players
