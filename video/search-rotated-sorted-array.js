/*
33/11. SEARCH SORTED SUBARRAY
* binary search *

There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, 
nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) 
such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). 

For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target, 
return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity. *hint: binary search*

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4

-PSEUDO-
l=0
r=n-1
WHILE l <= r
    mid = (l + r) / 2
    IF t === nums[mid]
        return mid
    # left sorted portion
    IF nums[l] <= nums[mid]
        IF t > nums[mid] OR t < nums[l]
            l = mid + 1
        ELSE r = mid - 1
    # right sorted portion
    ELSE 
        IF t < nums[mid] OR t > nums[r]
            r = mid - 1
        ELSE l = mid + 1
return -1
*/

function search(nums, target) {
    const n = nums.length
    let left = 0
    let right = n-1

    while (left <= right) {
        mid = ((left + right) / 2)
        if (target === nums[mid]) return mid

        // left sorted portion
        if (nums[left] <= nums[mid]) {
            if (target > nums[mid] || target < nums[left]) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        // right sorted portion    
        } else {
            if (target < nums[mid] || target > nums[right]) {
                right = mid - 1
            } else {
                left = mid + 1
            }
        }
    }
    return -1
}

console.log(search([4,5,6,7,0,1,2], 0))