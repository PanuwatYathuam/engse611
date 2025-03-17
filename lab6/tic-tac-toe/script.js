let scoreX = 0;
let scoreO = 0;
let currentPlayer = "x";
let board = Array(9).fill(null);
let gameActive = true;

const grid = document.querySelector("#grid");
const boxes = document.querySelectorAll("#grid div");
const statusText = document.querySelector("#status");
const scoreXText = document.querySelector("#scoreX");
const scoreOText = document.querySelector("#scoreO");
const resetButton = document.querySelector("#reset");

boxes.forEach((box, index) => {
  box.addEventListener("click", () => handleMove(index, box));
});

resetButton.addEventListener("click", resetGame);

function handleMove(index, box) {
  if (board[index] || !gameActive || currentPlayer === "o") return;

  board[index] = currentPlayer;
  box.textContent = currentPlayer.toUpperCase();
  box.classList.add(currentPlayer);

  if (checkWinner()) {
    gameActive = false;
    updateScore();
    statusText.textContent = `${currentPlayer.toUpperCase()} ชนะ!`;
    return;
  }

  if (board.every(cell => cell)) {
    gameActive = false;
    statusText.textContent = "เสมอ!";
    return;
  }

  currentPlayer = "o";
  setTimeout(computerChooseO, 500);
}

function computerChooseO() {
  const freeSpaces = board.map((value, index) => value === null ? index : null).filter(value => value !== null);
  const randomIndex = freeSpaces[Math.floor(Math.random() * freeSpaces.length)];

  board[randomIndex] = "o";
  boxes[randomIndex].textContent = "O";
  boxes[randomIndex].classList.add("o");

  if (checkWinner()) {
    gameActive = false;
    updateScore();
    statusText.textContent = "O ชนะ!";
    return;
  }

  if (board.every(cell => cell)) {
    gameActive = false;
    statusText.textContent = "เสมอ!";
    return;
  }

  currentPlayer = "x";
}

function checkWinner() {
  const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  return winPatterns.some(pattern => {
    const [a, b, c] = pattern;
    return board[a] && board[a] === board[b] && board[a] === board[c];
  });
}

function updateScore() {
  if (currentPlayer === "x") {
    scoreX++;
    scoreXText.textContent = scoreX;
  } else {
    scoreO++;
    scoreOText.textContent = scoreO;
  }
}

function resetGame() {
  board.fill(null);
  boxes.forEach(box => {
    box.textContent = "";
    box.classList.remove("x", "o");
  });
  gameActive = true;
  currentPlayer = "x";
  statusText.textContent = "";
}
