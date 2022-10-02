/* 152/10. MAXIMUM PRODUCT SUBARRAY

Given an integer array nums, 
find a contiguous non-empty subarray within the array 
that has the largest product, and return the product.

-A subarray is a contiguous subsequence of the array.

Example 1:

Input: nums = [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.

- pseudo -
* solution one* 
*-track min and max-*
result = nums[0]
max and min = 1
FOR let num of nums
  IF num > result, result = num
  IF num === 0, max and min = 1 
  temp = currentMax * num
  max = max(temp, num * MIN, num)
  min = min(temp, num * min, num)
  result = max(result, currMax)
return result 

*/

// * SOLUTION ONE * //

const maxProduct = function(nums) {
  let result = nums[0]
  let currentMax = 1
  let currentMin = 1

  for (let num of nums) {
    if (num > result) result = num
    if (num === 0) {
      currentMax = 1
      currentMin = 1
    }
    let temp = currentMax * num
    currentMax = Math.max(temp, num * currentMin, num)
    currentMin = Math.min(temp, num * currentMin, num)
    result = Math.max(result, currentMax) 
  }
  return result
}

console.log(maxProduct([2, 3, -2, 4]))

// solution with notes

const maxProductNotes = function(nums) {
  // set result = nums[0], first comparator
  let result = nums[0]
  // set current max and min variables = 1, comparators
  let currentMax = 1
  let currentMin = 1

  // for each num < nums.length
  for (let num of nums) {
    // if this num is greater than our current result
    // (ex. if nums[1] > nums[0])
    if (result < num) result = num
    // if num is 0, reset max and min values
    if (num === 0) {
      currentMax = 1
      currentMin = 1
    }
    // let temp = currentMax times num
    let temp = currentMax * num
    // current max value = the max of (temp or num * currentMin or num)
    currentMax = Math.max(temp, num * currentMin, num)
    // current min = the min of (above)
    currentMin = Math.min(temp, num * currentMin, num)
    // result = max of (result, currentMax)
    result = Math.max(result, currentMax)
  }
  return result
}

console.log(maxProductNotes([2, 3, -2, 4]))


// * SOLUTION TWO * //
