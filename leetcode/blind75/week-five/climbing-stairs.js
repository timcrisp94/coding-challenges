/*

You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step

fibonacci sequence 
*/

// const climbStairs = function(n) {
//   if (n < 2) return 1
//   if (n === 2) return 2
  
//   let current = 0
//   let first = 1
//   let second = 2

//   for (let i = 2; i < n; i++) {
//     current = first + second
//     first = second
//     second = current
//   }
//   return current
// }

const climbStairs = function(n, memo={1:1,2:2}) {
  if (memo[n] !== undefined) return memo[n]
  memo[n] = climbStairs(n - 1, memo) + climbStairs(n-2, memo)
  return memo[n]
}

console.log(climbStairs(3))
