// Given a *1-indexed* array of integers numbers that is already *sorted* in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

// Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

// The tests are generated such that there is exactly one solution. You may not use the same element twice.

// Your solution must use only constant extra space.

/*
PSUEDOCODE
-two pointer-
const n = nums.length
let left, sum, right = 0, 0, n-1
WHILE left < right
    IF sum===target
        return [left+1, right+1]
    ELSE IF sum > target
        right--
    ELSE IF sum < target
        left++
*/

function twoSumII(nums, target) {
    const n = nums.length
    let [left, sum] = [0, 0]
    let right = n-1

    while (left < right) {
        sum = nums[left] + nums[right]
        if (sum === target) {
            return [left+1, right+1]
        } else if (sum > target) {
            right--
        } else if (sum < target) {
            left++
        }
    }
}

console.log(twoSumII([2,7,11,15], 9))