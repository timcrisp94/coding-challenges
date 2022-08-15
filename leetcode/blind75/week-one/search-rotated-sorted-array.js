/*
There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4

*/

// const search = function(nums, target)
// let right, end = nums.length - 1
// let left, start = 0
// while l < r
  // let m = l + r / 2
  // if m is the value return min
  // left sorted conditions
  // if nums[m] >= nums[l]
    // if nums[l] <= target => nums[m]

const searchP = (nums, target) => {
  // let r = nums.length - 1
  let r = nums.length - 1
  // let left = 0
  let l = 0

  // init search while l <= r
  while (l <= r) {
    // let m = mid
    let m = Math.floor((l + r) / 2)
    // if nums[m] is the target return m 
    if (nums[m] === target) return m
    // left sorted conditions
    if (nums[l] <= nums[m]) {
      // if nums[l] <= target <= m
      if (nums[l] <= target && target <= nums[m]) {
        // search left side
        r = m - 1
      } else {
        // search right side
        l = m + 1
      }
      // else
      // right sorted conditions
    } else {
      // if nums[m] <= target <= nums[r]
      if (nums[m] <= target && target <= nums[r]) {
        // search right side
        l = m + 1
      } else {
        // search left side
        r = m - 1
      }
    }
  }
  return -1
}
const search = function(nums, target) {
  let right = nums.length - 1
  let left = 0

  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    if (nums[mid] === target) return mid

    if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target <= nums[mid]) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    } else {
      if (nums[mid] <= target && target <= nums[right]) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    }
  }
  return -1
}



console.log(search([4,5,6,7,0,1,2], 0))
console.log(search([5,1,3], 3))












