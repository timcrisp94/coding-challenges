/*
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

ex: input = [1,8,6,2,5,4,8,3,7], out = 49

pseudo - two pointers
let r = length -1
let l = 0 
while l < r
 let w = l - r
 -l[0], l[i]

*/



const maxAreaP = function(height) {
  // two pointers, l and r
  // r = length - 1
  let r = height.lenghth - 1
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



console.log(maxAreaP([1,8,6,2,5,4,8,3,7]))




















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



// console.log(maxArea([1,8,6,2,5,4,8,3,7]))