// 53 - Maximum Subarray

// Given an integer array nums, 
// find the contiguous subarray 
// (containing at least one number) 
// which has the largest sum and return its sum.

// A subarray is a contiguous part of an array.

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.
// Example 2:

// pseudo
// *greedy algorithm*
// max = nums[0]
// cur = 0
// for n in nums
//   edge case: if cur < 0: cur = 0
//   cur += n
//   max(max, cur)
// return max


const maxSubArray = (nums) => {
    const n = nums.length
    let maxSum = -Infinity
    let sum = 0

    for (let i = 0; i < n; i++) {
        sum = Math.max(nums[i], nums[i] + sum)
        maxSum = Math.max(sum, maxSum)
    }
    return maxSum
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))