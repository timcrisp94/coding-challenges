/*

Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
*/

function longestConsecutive(nums) {
  let n = nums.length
  if (!n) return 0

  let set = new Set(nums)
  let max = 0

  for (let num of set) {
    if (!set.has(num - 1)) { // 100, 200, and 1
      // if set does not have num - 1, it is the beginning of a sequence
      let cur = num
      let curMax = 1
      // for each consecutive number from cur, add one to curMax, increment cur
      while (set.has(cur + 1)) {
        cur += 1
        curMax += 1
      }
      max = Math.max(max, curMax)      
    }
  }
  return max
}

console.log(longestConsecutive([100,4,200,1,3,2]))