// Given an m x n grid of characters board and a string word, return true if word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

// Input: board = [
// ["A","B","C","E"],
// ["S","F","C","S"],
// ["A","D","E","E"]], 
// word = "ABCCED"

// ["_A","_B","_C","E"],
// ["S","F","_C","S"],
// ["A","_D","_E","E"]], 

// Output: true

const existP = (board, word) => {
  let result = false
  let n = board.length
  let m = board[0].length
  const check = function(r, c, i) {
    // check boundaries
    if (r < 0 || c < 0 || r >= n || c >= m) return
    // if board char does not match word char return
    if (board[r][c] !== word[i]) return
    // if we reach the end of the word we have a match
    if (i === word.length - 1) {
      return result = true      
    }
    // mark path null so we don't go over it again
    board[r][c] = null
    // try all directions
    check(r + 1, c, i + 1)
    check(r - 1, c, i + 1)
    check(r, c + 1, i + 1)
    check(r, c - 1, i + 1)
    // reset board
    board[r][c] = word[i]
  }
  // iterate rows and columns
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      // if we find first char of word
      if (board[i][j] == word[0]) {
        // check adjacent squares
        check(i, j, 0)
        // if result return result
        if (result) return result
      }
    }
  }
  return result
}

// let result = false
// helper check = function(r, c, i)
  // check boundaries
  // if board char does not match word char return
  // if we reach the end of the word return result true
  // mark path (board[r][c]) null so we don't go over it again
  // recursively call check on horizontal and vertical directions
  // reset board (board[r][c] = word[i])
// iterate rows and columns, 
// i = rows 
  // j = cols
    // if board[i][j] = first letter of word
      // check adjacent squares
      // if (result) return result
// return result 

const exist = (board, word) => {
  let result = false
  let n = board.length
  let m = board[0].length
  const check = function(r, c, i) {
    if (r < 0 || c < 0 || r >= n || c >= m) return
    if (board[r][c] !== word[i]) return
    if (i === word.length - 1) {
      return result = true      
    }
    board[r][c] = null
    check(r + 1, c, i + 1)
    check(r - 1, c, i + 1)
    check(r, c + 1, i + 1)
    check(r, c - 1, i + 1)
    board[r][c] = word[i]
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (board[i][j] == word[0]) {
        check(i, j, 0)
        if (result) return result
      }
    }
  }
  return result
}
console.log(exist([
["A","B","C","E"],
["S","F","C","S"],
["A","D","E","E"]], "ABCCED"))

console.log(exist([
  ["A","B","C","E"],
  ["S","F","C","S"],
  ["A","D","E","E"]], "ABCB"))
