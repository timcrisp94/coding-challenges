/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0. 

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
*/

// kadane's - max sum
// N = prices.length
// cur, max = 0
// FOR i = 1 UPTO N
  // cur = max(0, prices[i] - p[i-1])
  // max = max(cur,max)
// return max

const maxProfit = (prices) => {
  let n = prices.length
  let curr = 0
  let max = 0

  for (let i = 1; i < n; i++) {
    curr = Math.max(0, curr += prices[i] - prices[i-1])
    max = Math.max(curr, max)
  }
  return max
}

console.log(maxProfit([7,1,5,3,6,4]))