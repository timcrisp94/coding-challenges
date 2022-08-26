/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0. 

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
*/

// array of prices, prices[i] is the price on the ith day
// - sellPrice = prices[i] , sliding window
// maximize profit
// - let maxProfit = 0
// variables for minPrice, profit

// function maxProfit(prices) {  
//   let maxProfit = 0
//   let minPrice = prices[0]

//   for (let sell = 1; sell < prices.length; sell++) {
//     let sellPrice = prices[sell]
//     let profit = sellPrice - minPrice

//     maxProfit = Math.max(profit, maxProfit)

//     if (sellPrice < minPrice) minPrice = sellPrice
//   }

//   return maxProfit
// }

// function maxProfit(prices) {
//   const n = prices.length
//   let max = 0
//   let min = prices[0]

//   for (let i = 1; i < n; i++) {
//     min = Math.min(min, prices[i])
//     max = Math.max(max, prices[i] - min)
//   }
//   return max
// }

// dp

// const maxProfit = function(prices) {
//   let min = -Infinity
//   let max = 0

//   for(let price of prices){
//     let prevMin = min
//     let prevMax = max

//     min = Math.max(prevMin, 0 - price);
//     max = Math.max(prevMax, prevMin + price);      
//   }
//   return max;
// };

// kadane's

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