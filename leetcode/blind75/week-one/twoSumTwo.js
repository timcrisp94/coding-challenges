/*
167. TWO SUM II
Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

The tests are generated such that there is exactly one solution. You may not use the same element twice.

Your solution must use only constant extra space.

Example 1:

Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].

- pseduo -
* 1-indexed aka nums[0] = nums[1]
N = nums.length
SUM = 0
L = 0
R = N - 1
WHILE L < R
  sum = nums[L] + nums[R]
  IF sum === target
    return [l+1, r+1]
  ELSE IF sum > target
    R--
  ELSE IF sum < target
    L++



*/

var twoSum = function(nums, target) {
  const n = nums.length
  let sum = 0
  let left = 0
  let right = n - 1

  while (left < right) {
    sum = nums[left] + nums[right]

    if (sum === target) {
      return [left + 1, right + 1]
    } else if (sum > target) {
      right--
    } else if (sum < target) {
      left++
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9))

// time complexity : O(N) - length of input array
// space : O(1) - no new data structures


// SLIGHTLY OPTIMIZED TWO-POINTER SOLUTION

const twoSumII = function(nums, target) {
  const n = nums.length
  let p1 = 0
  let p2 = n -1

  while (p1 < p2) {
    if (nums[p1] + nums[p2] === target) {
      return [p1+1, p2+1]
    } else if (nums[p1] + nums[p2] < target) {
      p1 += 1
    } else p2 -= 1    
  }
}

console.log(twoSumII([2, 7, 11, 15], 9))

// this solution is faster by not using a sum variable
// though the sum variable makes it easier to read