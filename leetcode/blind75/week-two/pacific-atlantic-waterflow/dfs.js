/* 417/21. PACIFIC ATLANTIC WATERFLOW

There is an m x n rectangular island that borders both the Pacific Ocean and Atlantic Ocean. 
The Pacific Ocean touches the island's left and top edges, 
  and the Atlantic Ocean touches the island's right and bottom edges.

The island is partitioned into a grid of square cells. 
You are given an m x n integer matrix heights where  
  heights[r][c] represents the height above sea level of the cell at coordinate (r, c).

Rain water can flow to neighboring cells directly north, south, east, and west 
  if the neighboring cell's height is less than or equal to the current cell's height. 
  Water can flow from any cell adjacent to an ocean into the ocean.

Return a 2D list of grid coordinates result where 
  result[i] = [ri, ci] denotes that rain water can flow from cell (ri, ci) to both the Pacific and Atlantic oceans.

- PSEUDO - 
  *dfs*
function pacificAtlantic(matrix)
  const m, n = matrix.length, matrix[0].length
  IF n < 0 return []
  const pacVisited = new Set()
  const atlVisited = new Set()
  const directions = [[1,0], [-1,0], [0,1], [0,-1]]
  const intersection = (setA, setB) => 
    let result = new Set()
    FOR (let el of setB)
      IF (setA.has(el))
        result.add(el)
    return result
  const dfs = (i, j, visited) =>
    const pair = `${i}-${j}`
    IF visited has pair return
    visited.add(pair)
    FOR const direction of directions
      const[nextI, nextJ] = [i + direction[0], j + direction[1]]
      IF 0 <= nextI && nextI < m && nextJ < n && matrix[nextI][nextJ] >= matrix[i][j]
        dfs(nextI, nextJ, visited)
  FOR let row = 0 UPTO m
    dfs(row, 0, pacVisited)
    dfs(row, n-1, atlVisited)
  FOR let col = 0 UPTO n
    dfs(0, col, pacVisited)
    dfs(m-1, col, pacVisited)
  return [...intersection(pacVisited, atlVisited)].map(pair => pair.split('-').map(Number))
*/