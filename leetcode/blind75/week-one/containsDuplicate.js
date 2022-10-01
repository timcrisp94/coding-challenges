/*
217. CONTAINS DUPLICATE

Given an integer array nums, 
return true if any value appears at least twice in the array, 
and return false if every element is distinct.

Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false

/ pseduo /
use a SET to check 
if N !== SET.SIZE

*/

function containsDuplicate(nums) {
  return nums.length !== (new Set(nums).size)
}  

console.log(containsDuplicate([1,2,3,4]))