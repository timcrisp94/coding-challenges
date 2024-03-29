/*
Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.
/results, counter variable

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.
/conditional to keep inside the grid
/ mark visited land by changing the value from 1 to use
/

nput: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1
Example 2:

Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3
*/
// find all connected components in the graph
// edge cases: we need to stay inside the grid
// - we need to visit each element only once

// traverse grid
// if element = 1, call dfs helper function and ++counter
// change each visited element = 1 to 0

// const numIslands = function(grid) {
//   let counter = 0
//   const dfs = function(i, j) {
//     // edge case
//     if (
//       i >= 0 &&
//       j >= 0 &&
//       i < grid.length &&
//       j < grid[i].length &&
//       grid[i][j] === '1'
//     ) {
//       // mark element as visited
//       grid[i][j] = '0'
//       // visited all surrounding
//       dfs(i + 1, j) //bottom
//       dfs(i, j + 1) //right
//       dfs(i - 1, j) //top
//       dfs(i, j - 1) //left
//     }
//   }

//   for (let i = 0; i < grid.length; i++) {
//     for (let j = 0; j < grid[i].length; j++) {
//       if (grid[i][j] === '1') {
//         counter += 1
//         dfs(i, j)
//       }
//     }
//   }
//   return counter
// }

// console.log(numIslands([
//   ["0","0","0","0","0"],
//   ["0","0","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]))

/*
breadth first solution
*/

const numIslands = (grid) => {
  const isIsland = (i, j) =>
    i >= 0 &&
    i < grid.length &&
    j >= 0 &&
    j < grid[i].length &&
    grid[i][j] === '1';

  const bfs = (i, j) => {
    const queue = [[i, j]];

    while (queue.length) {
      const [i, j] = queue.shift();

      grid[i][j] = '0';

      if (isIsland(i + 1, j)) queue.push([i + 1, j]);
      if (isIsland(i, j + 1)) queue.push([i, j + 1]);
      if (isIsland(i - 1, j)) queue.push([i - 1, j]);
      if (isIsland(i, j - 1)) queue.push([i, j - 1]);
    }
  };

  let counter = 0;

  for (let i = 0; i < grid.length; i += 1) {
    for (let j = 0; j < grid[i].length; j += 1) {
      if (grid[i][j] === '1') {
        counter += 1;
        bfs(i, j);
      }
    }
  }

  return counter;
};


console.log(numIslands([
  ["0","0","0","0","0"],
  ["0","0","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]))

