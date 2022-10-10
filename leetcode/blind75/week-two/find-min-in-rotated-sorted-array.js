/* 153/15. FIND MINIMUM IN ROTATED SORTED ARRAY

Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

[4,5,6,7,0,1,2] if it was rotated 4 times.
[0,1,2,4,5,6,7] if it was rotated 7 times.
Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

Given the sorted rotated array nums of unique elements, return the minimum element of this array.

You must write an algorithm that runs in O(log n) time.

Example 1:

Input: nums = [3,4,5,1,2]
Output: 1
Explanation: The original array was [1,2,3,4,5] rotated 3 times.

- PSEUDO - 
n = nums.length
let left, right = 0, n - 1
WHILE left < right
  mid = left + right / 2
  guess = nums[mid]
  leftNum, rightNum = nums[left], nums[right]

  isTarget = leftNum < rightNum
  IF isTarget return leftNum

  greaterThanTarget = leftNum <= guess
  IF greaterThanTarget left = mid + 1

  lessThanTarget = guess < leftNum
  IF lessThanTarget right = mid

return nums[left]

*/

const findMin = function(nums) { 
  const n = nums.length
  let left = 0
  let right = n - 1

  while (left < right) {    
    const mid = (left + right) >> 1
    const guess = nums[mid]
    const [leftNum, rightNum] = [nums[left], nums[right]]

    const isTarget = leftNum < rightNum
    if (isTarget) return leftNum
    
    const greater = leftNum <= guess
    if (greater) left = mid + 1

    const less = guess < leftNum
    if (less) right = mid
  }
  return nums[left]
}

console.log(findMin([3,4,5,1,2]))
console.log(findMin([2,1]))

// ACTUAL FASTER SOLUTION THAT FEELS LIKE CHEATING

const findMinFaster = (nums) => {
  return Math.min(...nums)
}

console.log(findMinFaster([3,4,5,1,2]))
console.log(findMinFaster([2,1]))