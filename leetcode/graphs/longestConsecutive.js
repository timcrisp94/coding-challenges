/*
Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

Example 1:

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
Example 2:

Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9
*/

// sort array
// counter variable
// hash

const longestConsecutive = function(nums) {
  // base case
if (!nums.length) return 0

let set = new Set(nums)
let max = 0

for (let num of set) {
  if (!set.has(num - 1)) {
    let currNum = num
    let currMax = 1

    while (set.has(currNum + 1)) {
      currNum++
      currMax++
    }

    max = Math.max(max, currMax)
  }
}


return max
}

console.log(longestConsecutive([100,4,200,1,3,2]))