// input: nums, target (int)
// return: indices of the two nums that add to target 
// only one solution

// hash map, sliding window

const twoSum = function(nums, target) {
  const n = nums.length
  const map = {}

  for (let i = 0; i < n; i++) {
    const curr = nums[i]
    const diff = target - curr

    if (diff in map) {
      return [map[diff], i]
    }
    map[curr] = i
  }
  return null
}


console.log(twoSum([3,2,4], 6))

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