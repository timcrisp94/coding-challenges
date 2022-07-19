/*
Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

[4,5,6,7,0,1,2] if it was rotated 4 times.
[0,1,2,4,5,6,7] if it was rotated 7 times.
Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

Given the sorted rotated array nums of unique elements, return the minimum element of this array.

You must write an algorithm that runs in O(log n) time.

 

Example 1:

Input: nums = [3,4,5,1,2]
Output: 1
Explanation: The original array was [1,2,3,4,5] rotated 3 times.

*/

// binary search
// set initial values for left and right to first and last numbers of array
// if input array.length is 1, return number
// if left val is less than right, the input array is not rotated, return left val
// binary search for right val less than left

const findMin = function(nums) {
  let left = 0
  let right = nums.length - 1
  
  if (nums.length === 1) return nums[0]
  
  if (nums[left] < nums[right]) return nums[left]
  
  while (left < right) {
    const mid = Math.floor((left + right) / 2)
    if (nums[right] >= nums[mid]) {
      right = mid
    } else {
      left = mid + 1
    }
  }
  return nums[left]
}
console.log(findMin([1,2,3,4,0]))