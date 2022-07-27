const threeSum = function(nums) {
  // sort nums
  nums.sort((a, b) => a - b)
  const result = []

  // iterate through nums, run helper function on rest of the array
  for (let i = 0; i < nums.length; i++) {
    // avoid duplicate - (continue skips iteration)
    if (nums[i] === nums[i - 1]) continue
    // target is nums[i] *-1
    let target = nums[i] * -1
    // twoSum to find if j + k = target
    let subResult = twoSum(i + 1, target, nums)
    // prevent nested arrays
    result.push(...subResult)
  }
  return result
}
const twoSum = function(j, target, nums) {
  // two pointers j, k
  let k = nums.length - 1
  let result = []

  while (j < k) {
    let leftVal = nums[j]
    let rightVal = nums[k]
    // if right + left > target, move right down one
    if (leftVal + rightVal > target) {
      k--
      // if r + l < target, move left up one
    } else if (leftVal + rightVal < target) {
      j++
    } else {
      // if r + l = target, push it into result
      result.push([(target * -1), leftVal, rightVal])
      // avoid duplicates for j and k
      while (j < k && nums[j] === nums[j + 1]) j++
      while (j < k && nums[k] === nums[k - 1]) k--
      // increment j and k
      j++
      k--
    }
  }
  return result
}


console.log(threeSum([-1, 0, 1, 2, -1, -4]))