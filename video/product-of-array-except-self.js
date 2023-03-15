function productExceptSelf(nums) {
    const n = nums.length
    let result = new Array(n).fill(1)
    let prefix = 1
    let postfix = 1

    for (let i = 0; i < n; i++) {
        result[i] = prefix
        prefix *= nums[i]
    }

    for (let i = n-1; i >= 0; i--) {
        result[i] *= postfix
        postfix *= nums[i]
    }
    return result
}


console.log(productExceptSelf([1,2,3,4]))