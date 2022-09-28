/*
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

Example 1:
Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]

Example 2:
Input: n = 1
Output: ["()"]

*/

// only add open parens if open < n
// only add a closing parens if close < open
// valid IIF open == closed == n

// const generateParentheses = (n) => dfs(n)

// const dfs = (n, combos = [], open = 0, close = 0, path = []) => {
//   const isBaseCase = path.length === (n * 2)
//   if (isBaseCase) {
//     combos.push(path.join(''))
//     return combos
//   }

//   const isOpen = open < n
//   if (isOpen) backTrackOpen(n, combos, open, close, path)

//   const isClose = close < open
//   if (isClose) backTrackClose(n, combos, open, close, path)

//   return combos
// }

// const backTrackOpen = (n, combos, open, close, path) => {
//   path.push('(')
//   dfs(n, combos, (open + 1), close, path)
//   path.pop()
// }

// const backTrackClose = (n, combos, open, close, path) => {
//   path.push(')')
//   dfs(n, combos, (close + 1), close, path)
//   path.pop()
// }

const generateParentheses = function(n) {
  const output = []

  const dfs = (str, open, close) => {
    // closed parens can not be more than open parens
    if (open > close) return
    // base case
    if (open === 0 && close === 0) {
      output.push(str)
      return
    }
    // insert open parens and search for the next valid insertion
    if (open > 0) {
      dfs(`${str}(`, open - 1, close)
    }
    // insert close parens and ''    
    if (close > 0) {
      dfs(`${str})`, open, close - 1)
    }
  }
  dfs('', n, n)
  return output
}

console.log(generateParentheses(3))

const generateParenthesis = function(n) {
  let ans = []
  let m = 2 * n

  const dfs = (pos, open, seq) => {
    if (pos === m) {
      let res = new Array(m)
      for (let i = 0; i < m; i++) {
        res[i] = seq & 1 << i ? "(" : ")"
      }
      ans.push(res.join(""))
      return
    }

    if (open) dfs(pos+1, open-1, seq)
    if (m - pos > open) dfs(pos+1, open+1, seq | 1 << pos)
  }

  dfs(0, 0, 0)
  return ans
}

console.log(generateParenthesis(3))