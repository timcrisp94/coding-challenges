/*
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.\

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.

function threeSum (nums)
1. n = nums.length
2. result = [] or set
3.k=0
4.for let m = 0 < n
  if m + 

*/

/*
three sum, helper function two sum
function threeSum (nums)
-n = nums.length
-sort nums
-result array
-for let i=0;i<n
  -if nums[i] = nums[i-1] continue
  -let target = nums[i] * -1
  -let subresult = twoSum(i + 1, target, nums)
  result.push(...subresult)
return result
*/

/*
const twosum (j, target, nums)
-k = nums.length - 1
-result array
-while (j < k)
  -let left = nums[k]
  -let right = nums[j]
  if (left + right > target) k--
  else (l+r < target) j++
  else (l+r === target)
    -result.push(target * -1, left, right)
    / avoid duplicates / 
    -while j < k && nums[j] === nums[j + 1] j++
    -while j < k && nums[k] === nums[k - 1] k--
    j++
    k--
return result
*/
var threeSum = function(nums) {
  const result = [];
  
  function twoSum(i, nums) {
    let left = i + 1;
    let right = nums.length - 1;
    
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        while (nums[left] === nums[left + 1]) {
          // skip over duplicates from left
          left += 1;
        }
        while (nums[right] === nums[right - 1]) {
          // skip over duplicates from right
          right -= 1;
        }
          // move onto next numbers
          left += 1;
          right -= 1;          
      } else if (sum > 0) {
        right -= 1;
      } else {
        left += 1;
      }
    }
  }
  
  // sort incoming array
  const sortedNums = nums.sort((a, b) => a - b);
  // skip last two bc we have the two sum helper to go over those
  for (let i = 0; i < sortedNums.length - 2; i += 1) {
    // skip over duplicates here as well
    // we will start at 0 but start checking duplicates once 
    // we reach index 1 since we are looking behind 
    if (i === 0 || sortedNums[i - 1] !== sortedNums[i]) {
      twoSum(i, sortedNums, result);
    }
  }
  
  return result;
};

const twoSum = function(j, target, nums) {
  let k = nums.length - 1
  let result = []

  while (j < k) {
    let leftVal = nums[j]
    let rightVal = nums[k]

    if (leftVal + rightVal > target) {
      k--
    } else if (leftVal + rightVal < target) {
      j++
    } else {
      result.push([(target * -1), leftVal, rightVal])
      while (j < k && nums[j] === nums[j + 1]) j++
      while (j < k && nums[k] === nums[k - 1]) k--
      j++
      k--
    }
  }
  return result
}

const threeSum = function(nums) {
  nums.sort((a, b) => a - b)
  const result = []

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] === nums[i - 1]) continue

    let target = nums[i] * -1
    let subResult = twoSum(i + 1, target, nums)
    result.push(...subResult)
  }
  return result
}



console.log(threeSum([-1,0,1,2,-1,-4]))