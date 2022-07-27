/*
Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

The tests are generated such that there is exactly one solution. You may not use the same element twice.

Your solution must use only constant extra space.

ex : [2, 7, 11, 15] target = 9
  output : [1, 2]
*/

var twoSum = function(nums, target) {
  let sum = 0
  let left = 0
  let right = nums.length - 1

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