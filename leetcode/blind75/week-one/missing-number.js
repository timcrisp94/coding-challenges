/*

Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

Example 1:

Input: nums = [3,0,1]
Output: 2
Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

bf : sort, iterate nums, if !i + 1 return i + 1

*/

const missingNumber = (nums) => {
  const n = nums.length  
  const result = new Array(n + 1).fill(-1)

  for (const num of nums) {
    result[num] = num
  }

  return result.indexOf(-1)
}

// console.log(missingNumber([0,1]))

const missingNumberAlt = (nums) => {
  let result = nums.length
  
  for (let i = 0; i < nums.length; i++) {
    result += i - nums[i]
    // 3 += 0 - 3 -> 0
    // 0 += 1 - 0 -> 1
    // 1 += 2 - 1 -> 2
  }
  return result
}

console.log(missingNumberAlt([3,0,1]))

// using bit manipulation

const missingNumberBit = function(nums) {
  let result = nums.length
  for (let i = 0; i < nums.length; i++) {
    result = result ^ i ^ nums[i]
  }
  return result
}

console.log(missingNumberBit([0,1]))
