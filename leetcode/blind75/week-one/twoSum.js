/*
1. TWO SUM

Given an array of integers nums and an integer target, 
return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, 
and you may not use the same element twice.

You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

- pseudo - 
*hash map and sliding window*
const n = nums.length
hash = {}
result = []
FOR let i UPTO n
  cur = nums[i]
  dif = target - cur
  IF dif in hash
    return [hash[diff], i]
  map[cur] = i
(return null)
*/


const twoSum = function(nums, target) {
  const n = nums.length
  const map = {}

  for (let i = 0; i < n; i++) {
    const curr = nums[i]
    const diff = target - curr

    if (diff in map) {
      return [map[diff], i]
    }
    map[curr] = i
  }
  return null
}


console.log(twoSum([3,2,4], 6))
