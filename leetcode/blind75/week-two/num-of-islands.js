/*
Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

ex : Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1
*/

/*

const isIsland = function(i, j) {
  if (i >= 0 && i < grid.length &&
  j >=0 && j < grid[i].length &&
  grid[i][j] === '1') return true

}

const bfs = (i, j) => {
  const queue = [i, j]

  while (queue.length) {
    const [i, j] = queue.shift()
  }

  grid[i][j] = '0'

  if (isIsland(i + 1, j)) queue.push([i + 1, j])
  if (isIsland(i - 1, j)) queue.push([i - 1, j])
  if (isIsland(i, j + 1)) queue.push([i, j + 1])
  if (isIsland(i, j - 1)) queue.push([i, j - 1])
}

const numIslands = function(grid) {
  let counter = 0  

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === '1') {
        counter++
        bfs(i, j)
      }
    }
  }
  return counter
}



*/

const numIslands = function(grid) {
  const isIsland = (i, j) =>
    i >= 0 && i < grid.length &&
    j >= 0 && j < grid[i].length &&
    grid[i][j] === '1'

  const bfs = (i, j) => {
    const queue = [[i, j]]

    while (queue.length) {
      const [i, j] = queue.shift()

      grid[i][j] = '0'

      if (isIsland(i + 1, j)) queue.push([i + 1, j])
      if (isIsland(i - 1, j)) queue.push([i - 1, j])
      if (isIsland(i, j + 1)) queue.push([i, j + 1])
      if (isIsland(i, j - 1)) queue.push([i, j - 1])
    }
  }
  
  let counter = 0

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === '1') {
        counter++
        bfs(i, j)
      }
    }
  }
  return counter
}







console.log(numIslands([
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]]))