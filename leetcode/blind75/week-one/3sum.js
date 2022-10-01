/*
15. 3SUM
# # notebook no. 7

Given an integer array nums, 
return all the triplets [nums[i], nums[j], nums[k]] 
such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.\

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]

Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.

- PSEUDO -
n = nums.length
nums.sort(a-b) (to help eliminate duplicates)
result = []
FOR let i UPTO n
  IF i > 0 && nums[i] === nums[i-1] cont
  left = i + 1
  right = n -1
  WHILE l < r
    3sum = nums[i] + nums[l] + nums[r]
    IF 3sum > 0 r--
    ELIF 3sum < 0 l++
    ELSE 
      result.push([nums[i], nums[l], nums[r]]) 
      l++
      WHILE nums[l] === nums[l-1] && l < r l++
*/

const threeSum = function(nums) {
  const n = nums.length
  nums.sort((a, b) => a - b)

  const result = []

  for (let i = 0; i < n; i++) {
    if (nums[i] === nums[i - 1]) continue
    let left = i + 1
    let right = n - 1

    while (left < right) {
      let threeSum = nums[i] + nums[left] + nums[right]
      if (threeSum > 0) {
        right -= 1
      } else if (threeSum < 0) {
        left += 1
      } else {
        result.push([nums[i], nums[left], nums[right]])
        left += 1
        while (nums[left] === nums[left - 1] && left < right) {
          left += 1
        }
      }
    }
  }
  return result
}

console.log(threeSum([-1,0,1,2,-1,-4]))

// time : O(nlogn) (sorting) + O(n2) -> O(n2)