/*

Given an integer array nums, return the length of the longest strictly increasing subsequence.

A subsequence is a sequence that can be derived from an array by deleting some or no elements without changing the order of the remaining elements. For example, [3,6,2,7] is a subsequence of the array [0,3,1,6,2,2,7].

*/

const lengthOfLISP = function(nums) {
  let n = nums.length
  // build array length n, fill 
  let arr = Array(n).fill(1)
  
  // iterate, using arr to store values of i,j comparisons
  // let i = 1 < arr.length
  for (let i = 1; i < arr.length; i++) {
    // let j = 0 (compare first and second) < i
    for (let j = 0; j < i; j++) {
      // if right value greater than left
      if (nums[i] > nums[j]) {
        // count b/w array
        arr[i] = Math.max(arr[i], arr[j] + 1)
      }
    }
  }
  // return largest value in array 
  return Math.max(...arr)
}

const lengthOfLIS = function(nums) {
  let n = nums.length
  if (n === 0) return null
  let arr = Array(n).fill(1)

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        arr[i] = Math.max(arr[i], arr[j] + 1)
      }
    }
  }
  return Math.max(...arr)
}



console.log(lengthOfLIS([10,9,2,5,3,7,101,18]))