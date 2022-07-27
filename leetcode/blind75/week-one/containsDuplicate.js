// integer array nums
// if any value appears at least twice return true
// else return false

function containsDuplicate(nums) {
  return nums.length !== (new Set(nums).size)
}  

console.log(containsDuplicate([1,2,3,4]))