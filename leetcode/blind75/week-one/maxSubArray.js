// greedy

// function maxSubArray(nums) {
//   let maxSum = Number.MIN_SAFE_INTEGER
//   let sum = 0

//   for (let i = 0; i < nums.length; i++) {
//     sum = Math.max(sum + nums[i], nums[i])
//     maxSum = Math.max(sum, maxSum)
//   }
//   return maxSum
// }

// dynamic greedy
const maxSubArray = (nums) => {
  const n = nums.length
  for (let i = 1; i < n; i++) {
    nums[i] = Math.max(nums[i], nums[i] + nums[i-1])
  }
  return Math.max(...nums)
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))