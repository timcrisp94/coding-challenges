/*
- pseudo -
const n = grid.length
let count = 0
function dfs(grid, i, j)
  IF i < 0 OR i >= n OR j >= grid[i].length OR grid[i][j] == '0' return
  grid[i][j] = '0'
  dfs(grid, i + 1, j)
  dfs(grid, i - 1, j)
  dfs(grid, i, j + 1)
  dfs(grid, i, j - 1)
FOR let i = 0 UPTO n
  FOR let j = 0 UPTO grid[i].length
    IF grid[i][j] == '1'
      count += 1
      dfs(grid, i, j)
return count
*/

var numIslands = function(grid) {
  const n = grid.length
  let count = 0;

  function dfs(grid, i, j) {
    if (i < 0 || i >= n || j < 0 || j >= grid[i].length || grid[i][j] == '0') {
      return;
    }
    
    grid[i][j] = '0';
    
    dfs(grid, i + 1, j); // down
    dfs(grid, i - 1, j); // up
    dfs(grid, i, j + 1); // right
    dfs(grid, i, j - 1); // left
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] == '1') {
        count += 1;
        dfs(grid, i, j);
      }
    }
  }

  return count;
};

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