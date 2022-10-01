/*
238. PRODUCT OF ARRAY EXCEPT SELF

Given an integer array nums, 
return an array answer such that 
answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

- pseudo - 
use prefix to find values before i
use postfix to find values after i

const n = nums.lengths
let result = Array(n).fill(1)
pre, post = 1
for let i UPTO n
  result[i] = prefix
  prefix *= nums[i]
for let j = n-1 DOWNTO 0
  result[j] *= postfix
  postfix *= nums[j]

*/

const productExceptSelf = function(nums) {
  const n = nums.length
  let result = new Array(n).fill(1)
  let prefix = 1

  for (let i = 0; i < n; i++) {
    result[i] = prefix
    prefix *= nums[i]
  }

  let postfix = 1
  for (let j = n - 1; j >= 0; j--) {
    result[j] *= postfix
    postfix *= nums[j]
  }
  
  return result
}


console.log(productExceptSelf([1,2,3,4]))
