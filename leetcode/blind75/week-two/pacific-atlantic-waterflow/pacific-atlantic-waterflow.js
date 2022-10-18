const pacificAtlantic = function(matrix) {
  if (matrix.length === 0) return []

  const [m,n] = [matrix.length, matrix[0].length]
  const pacificVisited = new Set()
  const atlanticVisited = new Set()
  const directions = [
    [1,0],
    [-1,0],
    [0,1],
    [0,-1]
  ]

  const intersection = (setA, setB) => {
    let result = new Set()
    for (let el of setB) {
      if (setA.has(el)) {
        result.add(el)
      }
    }
    return result
  }

  const dfs = (i, j, visited) => {
    const pair = `${i}-${j}`
    if (visited.has(pair)) return
    visited.add(pair)

    for (const direction of directions) {
      const [nextI, nextJ] = [i + direction[0], j + direction[1]]

      if (
        0 <= nextI &&
        nextI < m &&
        0 <= nextJ &&
        nextJ < n &&
        matrix[nextI][nextJ] >= matrix[i][j]
      ) {
        dfs(nextI, nextJ, visited)
      }
    }
  }

  for (let row = 0; row < m; row++) {
    dfs(row, 0, pacificVisited)
    dfs(row, n - 1, atlanticVisited)
  }

  for (let col = 0; col < n; col++) {
    dfs(0, col, pacificVisited)
    dfs(m - 1, col, atlanticVisited)
  }

  return [...intersection(pacificVisited, atlanticVisited)].map(pair => pair.split('-').map(Number))
}


console.log(pacificAtlantic([[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]))