/*

You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin.

Input: coins = [1,2,5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1

*/

const coinChange = function(coins, amount) {
  const dp = new Array(amount + 1).fill(amount + 1)  
  dp[0] = 0

  for (let i = 1; i < dp.length; i++) {
    for (const coin of coins) {
      if (i - coin >= 0) {
        dp[i] = Math.min(dp[i], 1 + dp[i - coin])
      }
    }
  }
  return dp[amount] === amount + 1 ? -1 : dp.pop()
}

console.log(coinChange([1, 2, 5], 11))