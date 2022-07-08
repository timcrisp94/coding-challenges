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

// var climbStairs = function(n) {
//   if (n < 2) return 1
//   if (n === 2) return 2
  
//   let ways = 0
//   let first = 1
//   let second = 2

//   for (let i = 3; i <= n; i++) {
//     ways = first + second
//     first = second
//     second = ways
//   }

//   return ways
// };

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





// function fibonacci(n) {
//   if (n <= 0) return []

//   let result = [0, 1]
  

//   for (let i = 2; i < n; i++) {
//     result[i] = result[i - 2] + result[i - 1]
//   }

//   return result
// }

// console.log(fibonacci(5))

// function fibonacci(n) {
//   if (n <= 0) return []

//   let result = [0, 1]

//   for (let i = 2; i <= n; i++) {
//     result[i] = result[i -2] + result[i - 1]
//   }

//   return result
// }

function climbStairs(n) {
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

// function fibonacci(n, memo) {
//   memo = memo || {}

//   if (memo[n]) return memo[n]
//   if (n <= 1) return 1

//   return memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo)
// }

// n time; O(n) space complexity

function fibonacci(n, memo) {
  memo = memo || {}

  if (memo[n]) return memo[n]
  if (n <= 1) return 1

  return memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo)
}

console.log(fibonacci(6))