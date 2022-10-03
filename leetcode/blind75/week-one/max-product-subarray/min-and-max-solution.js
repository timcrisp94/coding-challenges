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

/* * * PREFIX SUM / PRODUCT

- if the array is 1 2 3 4     -
-- the sumarray is 1 3 6 10  - -

- if the array is 1 2 3 4     -
-- productarray is 1 2 6 24  - -


- a zero value divides the array; resets variables
- a negative number turns all values negative, turns max to min; 
- - we can store the *first negative product* if we encounter a negative
- - if we encounter a negative again, find max by : max(prefix/negative, max) 
- * max represents the value of the negative divided by the prefix

n = nums.length
EC - IF n === 1 return nums[0]

- no negative values yet
- initial prefix value
- max = negative / prefix 

negative = 1
prefix = 1 
max = 0

FOR let i UPTO n
  prefix *= nums[i]
  max = max(prefix, max)
  IF prefix < 0
    max = max(prefix/negative, max)
    negative = negative == 1 ? prefix : negative
  ELIF prefix == 0
    prefix = 1
    firstN = 1
return max
  
*/

const maxProductDP = function(nums) {
  const n = nums.length
  if (n === 1) return nums[0]

  let negative = 1
  let prefix = 1
  let max = 0

  for (let i = 0; i < n; i++) {
    prefix *= nums[i]
    max = Math.max(prefix, max)

    if (prefix < 0) {
      max = Math.max(prefix/negative, max)
      negative = negative == 1 ? prefix : negative
    } else if (prefix == 0) {
      prefix = 1
      negative = 1
    }
  }
  return max
}


console.log(maxProductDP([2, 3, -2, 4]))

