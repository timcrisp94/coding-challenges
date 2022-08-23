/*

You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

Return true if you can reach the last index, or false otherwise. 

Example 1:

Input: nums = [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
Example 2:

Input: nums = [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.

pseudo - use greedy solution 
*/

const canJump = function(nums) {
  const n = nums.length
  if (n === 0) return false
  
  let goal = n - 1
  for (let i = n - 2; i >= 0; i--) {
    if (i + nums[i] >= goal) {
      goal = i
    }
  }
  if (goal === 0) return true
  else return false
}

console.log(canJump([3,2,1,1,4]))

// alt greedy solution

function canJumpAlt(nums) {
  const n = nums.length
  let max = nums[0]

  for (let i = 1; i < n; i++) {
    if (max < 1) return false
    max = Math.max(nums[i] + i, max)
  }
  return true
}
console.log(canJumpAlt([3,2,1,1,4]))