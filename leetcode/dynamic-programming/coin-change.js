/*
You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin.

Example 1:

Input: coins = [1,2,5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1
Example 2:

Input: coins = [2], amount = 3
Output: -1
Example 3:

Input: coins = [1], amount = 0
Output: 0
*/

// brute force

function coinChange(coins, amount) {
  const table = new Array(amount + 1).fill(amount + 1)
  table[0] = 0

  for (let coin of coins) {
    for (let i = 0; i < table.length; i++) {
      if (coin <= i) {
        let idx = i - coin
        let potentialAmt = table[idx] + 1
        table[i] = Math.min(potentialAmt, table[i])
      }
    }
  }
  return table[table.length - 1] > amount ? -1 : table[table.length - 1]
}

console.log(coinChange([1, 2, 5], 11))