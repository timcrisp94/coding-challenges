/*
Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

Example 1:

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

*/

const longestConsecutive = function(nums) {
  let map = new Map()

  for (let num of nums) {
    map.set(num, 1)    
  }

  console.log(map)
  // Map(6) { 100 => 1, 4 => 1, 200 => 1, 1 => 1, 3 => 1, 2 => 1 }
  
  for (let i in nums) {
    if (map.has(nums[i] - 1)) {
      map.set(nums[i], 0)
    }
  }

  // console.log(map)
  // Map(6) { 100 => 1, 4 => 0, 200 => 1, 1 => 1, 3 => 0, 2 => 0 }
  
  let max = 1
  for (let el of nums) {
    if (map.get(el) == 1) {
      let count = 1
      while (map.has(el + count)) {
        count += 1
      }
      max = Math.max(max, count)
    }
  }

  return max
}


console.log(longestConsecutive([100,4,200,1,3,2]))