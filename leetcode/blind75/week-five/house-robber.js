/*

You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.

pseudo : 
recurrence relationship = rob(max(arr[0], arr[2:n])) or rob(max[1:n])

rob 1st house (base case)
rob 2nd house : max(rob 1, rob 2)
rob 3rd house : max(rob 1 & 3, rob 2)
rob 4th house : max(rob 1 & 3, rob 4 & max(1 or 2))

to solve for i, look at i-1 and i-2
rob[i] = max(max(i-1) or num + (max(i-2)))
*/

const rob = function(nums) {
  const n = nums.length
  if (n < 1) return null
  if (n === 1) return nums[0] //base case

  let rob1 = 0
  let rob2 = 0
  // [rob1, rob2, i, i+1, ...]
  for (let num of nums) {
    // temp = house 1 + 3 or house 2
    let temp = Math.max(rob1 + num, rob2)
    rob1 = rob2
    rob2 = temp
  }
  return rob2
}

console.log(rob([1,2,3,1]))