/*
121. BEST TIME TO BUY AND SELL STOCK

You are given an array prices where 
prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock 
and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. 
If you cannot achieve any profit, return 0. 

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5

WHITEBOARD
-draw a picture: x and y axis: days / price
-find the min and max points
-two pointer solution or cur/max

- pseudo for cur/max - 
* sliding window, kadane's algo
n = prices.length
cur, max = 0
FOR i = 1 UPTO n
  cur = max(0, prices[i] - prices[i-1])
  max = max(cur, max)
return max
*/

// function maxProfit(prices) {
//     const n = prices.length
//     let cur = 0
//     let max = 0

//     for (let i = 1; i < n; i++) {
//         cur = Math.max(0, cur += prices[i] - prices[i-1])
//         max = Math.max(cur, max)
//     }
//     return max
// }


/*
pseudo for left right
n = prices.length
left, max = 0
for right=1 UPTO N
    IF (prices[left] < prices[right])
    left = right
    ELSE max(max, p[r] - p[l])
*/

// function maxProfit(prices) {
//     const n = prices.length
//     let left = 0
//     let max = 0

//     for (let right = 1; right < n; right++) {
//         if (prices[right] < prices[left]) {
//             left = right
//         } else {
//             max = Math.max(max, prices[right] - prices[left])
//         }
//     }
//     return max
// }

const maxProfit = (prices) => {
    const n = prices.length
    let [left, right, max] = [0,1,0]

    while (right < n) {
        const canSlide = prices[right] <= prices[left]
        if (canSlide) left = right

        const window = prices[right] - prices[left]

        max = Math.max(max, window)
        right++
    }
    return max
}

console.log(maxProfit([7,1,5,3,6,4]))