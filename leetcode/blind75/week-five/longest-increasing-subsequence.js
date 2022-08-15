/*

Given an integer array nums, return the length of the longest strictly increasing subsequence.

A subsequence is a sequence that can be derived from an array by deleting some or no elements without changing the order of the remaining elements. For example, [3,6,2,7] is a subsequence of the array [0,3,1,6,2,2,7].

*/
// O(n^2) solution 
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

// binary solution
// 
const lengthOfLISBinary = function(nums) {
  let n = nums.length
  if (n === 0) return 0

  const bsPosition = (dp, target, right) => {
    let left = 0
    while (left <= right) {
      let mid = Math.floor((left + right)/2)
      if (target === dp[mid]) return mid
      else if (target < dp[mid]) right = mid - 1
      else left = mid + 1
    }
    return left
  }

  let dp = new Array(n).fill(Number.MAX_SAFE_INTEGER)
  for (let i = 0; i < n; i++) {
    let pos = bsPosition(dp, nums[i], i)
    dp[pos] = nums[i]
  }

  for (let i = dp.length - 1; i >= 0; i--) {
    if (dp[i] !== Number.MAX_SAFE_INTEGER) return i + 1
  }
  return 0
}

console.log(lengthOfLISBinary([10,9,2,5,3,7,101,18]))