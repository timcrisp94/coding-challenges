/*
-pseudo-



pacificAtlantic(heights)
  const m,n = heights, heights[0].length
  const atlQueue = []
  const pacQueue = []
  FOR let x=0 UPTO M
    FOR let y=0 UPTO N
      IF x===m-1 OR y===n-1
        atlQueue.push([x,y])
      IF x===0 OR y===0
        pacQueue.push([x,y])
  const bfs = (queue) =>
    const isValid = (x, y) => x >= 0 && y >= 0 && x < m && y < n
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]]
    const visited = new Array(m).fill().map(() => new Array(n).fill(false))
    while(queue.length)
      const[x,y] = queue.shift()
      visited[x][y] = true
      FOR let dir of directions
        let nx = x + dir[0]
        let ny = y + dir[1]
        IF (!isVAlid(nx,ny) OR visited[nx][ny]) continue
        IF (heights[nx][ny] >= heights[x][y])
          queue.push([nx,ny])
      return visited
    const pacific = bfs(atlQueue)
    const atlantic = bfs(pacQueue)
    const paths = []
    FOR let x=0 UPTO m
      FOR let y=0 UPTO n
        IF pacific[x][y] AND atlantic[x][y]
        paths.push([x,y])
  return paths
*/

const pacificAtlantic = (heights) => {
  const m = heights.length, n = heights[0].length  
  const atlanticQueue = []
  const pacificQueue = []
  
  for (let x = 0; x < m; x++) {
      for (let y = 0; y < n; y++) {
          if (x === m - 1 || y === n - 1) {
              atlanticQueue.push([x, y])
          }
          if (x === 0 || y === 0) {
              pacificQueue.push([x, y])
          }
      }
  } 
  const bfs = (queue) => {
      const isValid = (x, y) => x >= 0 && y >= 0 && x < m && y < n
      const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]]
      const visited = new Array(m).fill().map(() => new Array(n).fill(false))
      
      while (queue.length) {
          const [x, y] = queue.shift()
          visited[x][y] = true

          for (let dir of directions) {
              let nx = x + dir[0]
              let ny = y + dir[1]
              if (!isValid(nx, ny) || visited[nx][ny]) continue
              if (heights[nx][ny] >= heights[x][y]) {
                  queue.push([nx, ny])
              }
          }
      }
      return visited
  }
  const pacific = bfs(atlanticQueue)
  const atlantic = bfs(pacificQueue)
  const paths = []
  for (let x = 0; x < m; x++) {
      for (let y = 0; y < n; y++) {
          if (pacific[x][y] && atlantic[x][y]) {
              paths.push([x, y])
          }
      }
  }
  return paths
}



console.log(pacificAtlantic([[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]))
// Output: [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]