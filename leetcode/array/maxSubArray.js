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

*/

// brute force - O(n^2)
var maxSubArrayBF = function(nums) {
  let maxSum = Number.MIN_SAFE_INTEGER
  // calculate the sum of every possible subarray
  for (let i = 0; i < nums.length; i++) {
    let currentSum = 0
    
    for (let j = i; j < nums.length; j++) {
      currentSum += nums[j]
      maxSum = Math.max(maxSum, currentSum)
    }    
  };
  return maxSum
}

console.log(maxSubArrayBF([-2,1,-3,4,-1,2,1,-5,4]))

// kadane's algorithm - O(n) time, O(1) space

const maxSubArrayKA = (nums) => {
  let maxSum = Number.MIN_SAFE_INTEGER
  let runningSum = 0

  for (let i = 0; i < nums.length; i++) {
    runningSum = Math.max(runningSum + nums[i], nums[i])
    maxSum = Math.max(maxSum, runningSum)
  }
  return maxSum
}

console.log(maxSubArrayKA([5,4,-1,7,8]))

// when the next element of the array is greater than the sum of the prev subarray with current element (runningSum = Math.max(runningSum + nums[i], nums[i])), we change the beginning of the subarray, starting from the current element / Math.max returns the largest input parameter

// divide and conquer - O(n * log(n)) time, O (log(n)) space

const maxSubArrayDC = (nums) => {
  const leftIndex = 0
  const rightIndex = nums.length - 1

  return findMaxSubArraySum(nums, leftIndex, rightIndex)
}

function findMaxSubArraySum(nums, left, right) {
  if (left > right) {
    return Number.MIN_SAFE_INTEGER
  }

  let mid = Math.floor((left + right) / 2)
  let currSum = 0
  let maxLeftSum = 0
  let maxRightSum = 0

  // iterate from the middle to the beginning
  for (let i = mid - 1; i >= left; i--) {
    currSum += nums[i]
    maxLeftSum = Math.max(maxLeftSum, currSum)
  }

  // reset currSum and iterate from the middle to the end
  currSum = 0
  for (let i = mid + 1; i <= right; i++) {
    currSum += nums[i]
    maxRightSum = Math.max(maxRightSum, currSum)
  }

  // maxSum uses the middle element and the best possible sum for each half
  let maxSum = nums[mid] + maxLeftSum + maxRightSum

  const leftHalf = findMaxSubArraySum(nums, left, mid - 1)
  const rightHalf = findMaxSubArraySum(nums, mid + 1, right)

  return Math.max(maxSum, Math.max(leftHalf, rightHalf))

}

console.log(maxSubArrayDC([5, 4, -1, 7, 8]))