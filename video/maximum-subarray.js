const maxSubArray = (nums) => {
    const n = nums.length
    let maxSum = -Infinity
    let sum = 0

    for (let i = 0; i < n; i++) {
        sum = Math.max(nums[i], nums[i] + sum)
        maxSum = Math.max(sum, maxSum)
    }
    return maxSum
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))