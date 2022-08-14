/*
Given an integer array nums, find a contiguous non-empty subarray within the array that has the largest product, and return the product.

The test cases are generated so that the answer will fit in a 32-bit integer.

A subarray is a contiguous subsequence of the array.

Example 1:

Input: nums = [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.

*/

/*
pseudo : dyanmic programming
  *-track min and max-*
let result = nums [1]
set currentMax and currentMin = 1
for let num of nums
  e.c./reset if num === 0, currentMax and Min = 1
  if result < num, result = num
  temp = currentMax * num
  currentMax(temp, num * currentMin, num)
  currentMin(temp, num * currentMin, num)
  result = max(result, currMax)
return result  
*/

const maxProductP = function(nums) {
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

console.log(maxProductP([2, 3, -2, 4]))
console.log(maxProductP([-2, 0, -1]))

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
console.log(maxProduct([-2, 0, -1]))

