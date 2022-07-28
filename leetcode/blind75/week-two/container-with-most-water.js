/*
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

ex: input = [1,8,6,2,5,4,8,3,7], out = 49
*/

const maxArea = function(height) {
  let left = 0
  let right = height.length - 1
  let maxWater = 0

  while (left < right) {
    let width = right - left
    let minHeight = Math.min(height[left], height[right])
    maxWater = Math.max(minHeight * width, maxWater)

    if (height[left] > height[right]) {
      right--
    } else {
      left++
    }
  }
  return maxWater
}

console.log(maxArea([1,8,6,2,5,4,8,3,7]))