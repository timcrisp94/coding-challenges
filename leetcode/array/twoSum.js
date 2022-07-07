/*

Given an array of integers nums and an integer target, return indices of the two numbers that add up to the target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
*/

var twoSum = function(nums, target) {
  const object = {}
  for (let i = 0; i < nums.length; i++) {
    let cur = nums[i]
    let diff = target - cur
    // return answer if current number was a difference from previous number
    if (object[cur] !== undefined) {
      return [object[cur], i]  
      // else set diff to current index in object
    } else {
      object[diff] = i
    }    
    console.log(object[cur])
  }
  
}  


// console.log(twoSum([2, 7, 11, 5], 9))
// console.log(twoSum([2, 5, 5, 11], 10))
// console.log(twoSum([3, 2, 4], 6))
console.log(twoSum([3, 2, 3], 6))
/*



*/