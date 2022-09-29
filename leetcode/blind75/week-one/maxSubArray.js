/*

Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

A subarray is a contiguous part of an array. 

Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Example 2:

Input: nums = [1]
Output: 1
Example 3:

Input: nums = [5,4,-1,7,8]
Output: 23

- pseudo - 
* greedy algorithm *
function (nums)
N = nums.length
sum = 0
maxSum = -Infinity
FOR let i = 0 UPTO N
  sum = max(sum + nums[i], nums[i])
  max = (max, sum)
return maxSum

*/

// greedy

// function maxSubArray(nums) {
//   let maxSum = Number.MIN_SAFE_INTEGER
//   let sum = 0

//   for (let i = 0; i < nums.length; i++) {
//     sum = Math.max(sum + nums[i], nums[i])
//     maxSum = Math.max(sum, maxSum)
//   }
//   return maxSum
// }

dynamic greedy
const maxSubArray = (nums) => {
  const n = nums.length
  for (let i = 1; i < n; i++) {
    nums[i] = Math.max(nums[i], nums[i] + nums[i-1])
  }
  return Math.max(...nums)
}


console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))