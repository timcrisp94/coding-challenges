/*

Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.


*/
const isValidSudoku = function(board) {
  const rows = {}
  const columns = {}
  const squares = {}

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      const num = board[r][c]
      if (num === '.') continue

      const grid = `${Math.floor(r/3)}${Math.floor(c/3)}`
      if (!rows[r]) rows[r] = new Set()
      if (!columns[c]) columns[c] = new Set()
      if (!squares[grid]) squares[grid] = new Set()
      if (
        rows[r].has(num) ||
        columns[c].has(num) ||
        squares[grid].has(num) 
      ) {
        return false
      }
      columns[c].add(num)
      rows[r].add(num)
      squares[grid].add(num)
    }
  }
  return true
}

console.log(isValidSudoku([["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]))