// Two Pointers
// two pointers iterate through a sorted* data structure in tandem until result

// Ways to Identify
// sorted array or linked list, and a need to find a set of elements that fulfill certain constraints
// the set of elements in the array is a pair, triplet or subarray

// Examples
// two sum II

// function twoPointers(data, target)
// const n = data.length
// let [left, right] = [0, n-1]
// let sum = 0
// while (left < right)
  // if (sum === target) return [left, right]
  // if (sum > target) right--
  // if (sum < target) left--

// TWO SUM
const twoSum = function(nums, target) {
  const n = nums.length
  let left = 0
  let right = n - 1
  let sum = 0

  while (left < right) {
    sum = nums[left] + nums[right]

    if (sum === target) {
      return [left, right]
    } 
    if (sum > target) {
      right -= 1
    }
    if (sum < target) {
      left += 1
    }    
  }
}

console.log(twoSum([2,7,11,15], 9))