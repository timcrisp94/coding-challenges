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

function maxProfit(prices) {  
  let maxProfit = 0
  let minPrice = prices[0]

  for (let sell = 1; sell < prices.length; sell++) {
    let sellPrice = prices[sell]
    let profit = sellPrice - minPrice

    maxProfit = Math.max(profit, maxProfit)

    if (sellPrice < minPrice) minPrice = sellPrice
  }

  return maxProfit
}

console.log(maxProfit([7,1,5,3,6,4]))