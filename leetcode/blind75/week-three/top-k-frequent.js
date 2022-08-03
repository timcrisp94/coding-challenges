/*

Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

Ex: nums = [1,1,1,2,2,3], k = 2
Output : [1,2]

pseudo : 
- base case
- add nums to map
- iterate map
- return results

*/
const topKFrequent = function(nums, k) {
  const count = new Map()
  let freq = []
  let result = []

  for (let i = 0; i <= nums.length; i++) {
    freq.push([])
  }

  for (let num of nums) {
    if (count.has(num)) {
      count.set(num, count.get(num) + 1)
    } else {
      count.set(num, 1)
    }
  }

  for (let [key, value] of count) {
    freq[value].push(key)
  }

  for (let i = freq.length - 1; i > 0 && result.length < k; i--) {
    if (freq[i] !== null) result.push(...freq[i])
  }
  return result
}
console.log(topKFrequent([1], 1))