/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
*/

function maxProfit(prices) {
  let maxProfit = 0
  let minPrice = prices[0]

  for (let sell = 1; sell < prices.length; sell++) {
    let sellPrice = prices[sell]
    let profit = sellPrice - minPrice

    maxProfit = Math.max(maxProfit, profit)

    if (sellPrice < minPrice) minPrice = sellPrice
  }
  return maxProfit
}

// complexity : O(n) where n = prices.length

console.log(maxProfit([7, 1, 5, 3, 6, 4]))


// brute force

var maxProfitBrute = function(prices) {
  let maxProfit = 0

  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      let profit = prices[j] - prices[i]
      maxProfit = Math.max(maxProfit, profit)
    }
  }
  return maxProfit
};

// time complexity : O(n^2) where n is prices.length
// space complexity : O(1)

console.log(maxProfitBrute([7, 1, 5, 3, 6, 4]))