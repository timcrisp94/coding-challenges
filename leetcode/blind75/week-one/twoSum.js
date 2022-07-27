// input: nums, target (int)
// return: indices of the two nums that add to target 
// only one solution

// hash map, sliding window

const twoSum = function(nums, target) {
  const hashMap = new Map()
  let result = []

  for (let num of nums) {
    hashMap[num] = (hashMap[nums] || 0) + 1
  }

  for (let i = 0; i < nums.length; i++) {
    let current = nums[i]
    let diff = target - current

    if (hashMap[diff]) {
      result.push(i, hashMap[diff])
    }
    return result
  }
}


console.log(twoSum([2,7,11,15], 9))

/*
const twoSum = (nums, target) => {
  let map = new Map()

  for (let i = 0; i < nums.length; i++) {
    let curr = nums[i]
    let diff = target - curr

    if (map.has(diff)) {
      return [map.get(diff), i]
    }
    map.set(curr, i)
  }
}

*/