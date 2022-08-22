/*

There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.

Ex: Input: m = 3, n = 2
Output: 3
Explanation: From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
1. Right -> Down -> Down
2. Down -> Down -> Right
3. Down -> Right -> Down
*/

// const uniquePaths = function(m, n) {
//   let row = new Array(n).fill(1)
  
//   for (let i = 0; i < m - 1; i++) {
//     let newRow = new Array(n).fill(1)
//     for (let j = n - 2; j > -1; j--) {
//       newRow[j] = newRow[j + 1] + row[j]      
//     }
//     row = newRow
//   }
//   return row[0]
// }

// refactored from above

const uniquePaths = (m, n) => {
  const dp = new Array(n + 1).fill(1)

  for (let row = m - 1; row > 0; row--) {
    for (let col = n - 1; col > 0; col--) {
      dp[col] = dp[col] + dp[col + 1]
      
    }    
  }
  return dp[1]
}

console.log(uniquePaths(3, 7))

// DP bottom up tabular

const uniquePathsBottomUp = (m, n) => {
  const dp = new Array(m + 1).fill(0)
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(n + 1).fill(1)
  }

  dp[m][n] = 1
  for (let row = m - 1; row > 0; row--) {
    for (let col = n -1; col > 0; col--) {
      dp[row][col] = dp[row+1][col] + dp[row][col + 1]
    }
  }
  return dp[1][1]
}

// console.log(uniquePathsBottomUp(3, 7))

// using memoization
const uniquePathsMemo = (m, n) => {
  const memo = new Array(m + 1).fill(0)
  for (let i = 0; i < memo.length; i++) {
    memo[i] = new Array(n + 1).fill(-1)
  }
  return memoHelper(m, n, 1, 1, memo)
}

const memoHelper = (m, n, row, col, memo) => {
  if (row === m && col === n) return 1
  if (row > m || col > n) return 0

  if (memo[row][col] === -1) {
    const pathsRight = memoHelper(m, n, row, col + 1, memo)
    const pathsDown = memoHelper(m, n, row + 1, col, memo)

    memo[row][col] = pathsRight + pathsDown
  }
  return memo[row][col]
}


// console.log(uniquePathsMemo(3, 7))