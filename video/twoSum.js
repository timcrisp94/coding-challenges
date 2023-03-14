/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
*/

const twoSum = (nums, target) => {
    const n = nums.length
    const map = new Map()

    for (let i = 0; i < n; i++) {
        let diff = target - nums[i]
        if (map.has(diff)) {
            return ([map.get(diff), i])
        }
        map.set(nums[i], i)
    }
}

console.log(twoSum([2,7,11,15], 9))