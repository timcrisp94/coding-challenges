/*
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.
*/

const productExceptSelf = function(nums) {
  let result = new Array(nums.length).fill(1)
  let prefix = 1

  for (let i = 0; i < nums.length; i++) {
    result[i] = prefix
    prefix *= nums[i]
  }

  let postfix = 1
  for (let j = nums.length - 1; j >= 0; j--) {
    result[j] *= postfix
    postfix *= nums[j]
  }
  
  return result
}


console.log(productExceptSelf([1,2,3,4]))
