/* 200/18. NUMBER OF ISLANDS

Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

ex : Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1

- pseudo -
function numIslands(grid)
const n = grid.length
const water = '0'
const land = '1'
const directions = [[1,0], [-1,0], [0,1], [0,-1]]
  

*/

function numIslands(grid) {
  const n = grid.length
  const water = '0'
  const land = '1'
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ]

  function bfs(grid, i, j) {
    let queue = [[i, j]]
    grid[i][j] = water

    while (queue.length) {
      for (let i = 0; i < queue.length; i++) {
        let [row, col] = queue.pop()

        for (let [x, y] of directions) {
          let iRow = row + x
          let iCol = col + y

          if (iRow < 0 || iRow >= n || iCol < 0 || iCol > grid[0].length || grid[iRow][iCol] !== land) continue

          grid[iRow][iCol] = water
          queue.unshift([iRow, iCol])
        }
      }
    }
  }
  let count = 0
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (grid[r][c] === land) {
        count += 1
        bfs(grid, r, c)
      }
    }
  }
  return count
}


console.log(numIslands([
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]]))

console.log(numIslands([
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]))