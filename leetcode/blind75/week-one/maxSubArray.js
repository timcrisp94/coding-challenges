function maxSubArray(nums) {
  let maxSum = Number.MIN_SAFE_INTEGER
  let sum = 0

  for (let i = 0; i < nums.length; i++) {
    sum = Math.max(sum + nums[i], nums[i])
    maxSum = Math.max(sum, maxSum)
  }
  return maxSum
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))