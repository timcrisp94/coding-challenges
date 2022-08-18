// const rob = (nums) => {
//   let n = nums.length
//   if (n <= 3) return Math.max(...nums)
//   let m1 = robHelper(0, n - 2, nums)
//   let m2 = robHelper(0, n - 1, nums)
//   return Math.max(m1, m2)
// }

// const robHelper = (start, end, nums) => {
//   let dp = new Array(start + (end - start + 1))
//   for (let i = start; i <= end; i++) {
//     dp[i] = Math.max((dp[i - 1] ? dp[i - 1] : 0), (dp[i - 2] ? dp[i - 2] : 0) + nums[i])
//   }
//   return dp[end]
// }


const rob = function(nums) {
  const n = nums.length
  if (n === 1) return nums[0]

  function robber(start, end) {
    let first = 0
    let second = nums[start]
    for (let i = start + 1; i < end; i++) {
      let temp = Math.max(first + nums[i], second)
      first = second
      second = temp
    }
    return second
  }
  return Math.max(robber(0, n - 1), robber(1, n))
}

console.log(rob([1,2,3,1]))