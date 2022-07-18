/*
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

ex: 
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

*/

const maxArea = function(height) {
  let maxWater = 0
  let leftPointer = 0
  let rightPointer = height.length - 1

  while (leftPointer < rightPointer) {
    let width = rightPointer - leftPointer
    let minHeight = Math.min(height[leftPointer], height[rightPointer])
    maxWater = Math.max((minHeight * width), maxWater)

    if (height[leftPointer] > height[rightPointer]) {
      rightPointer--
    } else {
      leftPointer++
    }
  }
  return maxWater
}

console.log(maxArea([1,8,6,2,5,4,8,3,7]))