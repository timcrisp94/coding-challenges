/*
The board is made up of an m x n grid of cells, where each cell has an initial state: live (represented by a 1) or dead (represented by a 0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

-Any live cell with fewer than two live neighbors dies as if caused by under-population.
-Any live cell with two or three live neighbors lives on to the next generation.
-Any live cell with more than three live neighbors dies, as if by over-population.
-Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.

The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously. Given the current state of the m x n grid board, return the next state.

Example 1:
[
  [0, 1, 0],
  [0, 0, 1],
  [1, 1, 1],
  [0, 0, 0]
]

becomes
[
  [0, 0, 0],
  [0, 0, 1],
  [0, 1, 1],
  [0, 1, 0]
]

*/



const gameOfLife = function(board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      let cell = board[i][j]
      let neighbors = getNeighbors(i, j, board)
      if (cell == 0 && neighbors === 3) {
        board[i][j] = 2
      }
      if (cell == 1 && (neighbors < 2 || neighbors > 3)) {
        board[i][j] = -1
      }
    }
  }
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] == -1) board[i][j] = 0
      if (board[i][j] == 2) board[i][j] = 1
    }
  }
}

const getNeighbors = function(radius = [-1, 0, +1], count = 0, board) {
  for (let i = 0; i < radius.length; i++) {
    for (let j = 0; j < radius.length; j++) {
      if ((!radius == 0 && radius[j] == 0) && board[r + radius[i]] !== null) {
        let neighbor = board[r + radius[i]][count + radius[j]]

        if (Math.abs(neighbor) == 1) count += 1
      }
    }
  }
  return count
}

console.log(gameOfLife([[0,1,0],[0,0,1],[1,1,1],[0,0,0]]))