/*
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
*/


// function climbStairs(n) {
//   if (n <= 1) return 1
  
//   let first = 1
//   let second = 2
  
//   for (let i = 3; i <= n; i++) {
//     let third = first + second
//     first = second
//     second = third
//   }
//   return second
// }

function climbStairs(n, memo) {
  memo = memo || {}
  
  if (memo[n]) return memo[n]
  if (n <= 1) return 1
  
  return memo[n] = climbStairs(n - 2, memo) + climbStairs(n - 1, memo)
}

function climbStairsOne(n) {
  if (n <= 1) return 1

  let first = 1
  let second = 2

  for (let i = 3; i <= n; i++) {
    let third = first + second
    first = second
    second = third
  }
  return second
}
console.log(climbStairs(5))