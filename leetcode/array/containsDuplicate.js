/*
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true

*/

// brute force
// var containsDuplicate = function (nums) {
//   let results = []

//   for (let num of nums) {
//     if (!results[num]) {
//       results.push(num)
//     } else {
//       return true
//     }
//     return false
//   }  
// }

// var containsDuplicate = function(nums) {
//   let numSet = new Set(nums)
//   return numSet.size !== nums.length
// }

var containsDuplicate = function(nums) {
  return (new Set(nums).size) !== nums.length
}

console.log(containsDuplicate([1,2,1]))