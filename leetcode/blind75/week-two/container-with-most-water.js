/*
11/14. CONTAINER WITH THE MOST WATER

You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

ex: input = [1,8,6,2,5,4,8,3,7], out = 49

- pseudo - 
* two pointers
const n = height.length
let l = 0 
let r = n - 1
let max = 0
WHILE l < r
  let width = r - l
  let min = min(height[l], height[r])
  max = max(min * width, max)
  IF (height[l] > height[r])
    r--
  ELSE
    l++
*/


const maxArea = function(height) {
  const n = height.length
  let left = 0
  let right = n - 1
  let maxArea = 0

  while (left < right) {
    let width = right - left
    let minHeight = Math.min(height[left], height[right])
    maxArea = Math.max(width * minHeight, maxArea)
    if (height[left] > height[right]) {
      right -= 1
    } else {
      left += 1
    }
  }
  return maxArea
}

console.log(maxArea([1,8,6,2,5,4,8,3,7]))

// with notes 

const maxAreaNotes = function(height) {
  // two pointers, l and r
  // r = length - 1
  let r = height.length - 1
  // let l = 0
  let l = 0
  // return variable maxArea = 0
  let maxArea = 0

  // initialize binary search while l < r
  while (l < r) {
    // width = r - l (width * maxheight)
    let width = r - l
    // determine max height[l,r] = min height (h[l], h[r])  
    let minHeight = Math.min(height[l], height[r])
    // determine max area (height * width, maxArea)
    maxArea = Math.max(minHeight * width, maxArea)
    // move values h[l], h[r]
    if (height[l] > height[r]) {
      r -= 1
    } else {    
      l += 1
    }
  }
  // return
  return maxArea 
}



console.log(maxAreaNotes([1,8,6,2,5,4,8,3,7]))