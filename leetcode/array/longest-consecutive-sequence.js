/*
Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

Example 1:

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

*/
const longestConsecutive = (nums) => {
  let set = new Set(nums)
  let max = 0

  for (let num of set) {
    if (set.has(num-1)) continue
    let cur = 1
    let prev = num

    while (set.has(prev+1)) {
      cur += 1
      prev = prev + 1
    }
    max = Math.max(cur, max)
  }
  return max
}


console.log(longestConsecutive([100,4,200,1,3,2]))