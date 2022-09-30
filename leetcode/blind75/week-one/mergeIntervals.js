/*
56. MERGE INTERVALS

Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

Example
input : [1,3], [2,6], [8,10], [15,18]
output : [1,6], [8,10], [15,18]

*/

// - pseudo -
// N = intervals.length
// sort intervals by first element
// let result = [intervals[0]]
// FOR let i = 1 UPTO N
  // let last = result.at(-1)[1] (same as intervals[0[1]])
  // let start = intervals[i][0] (first i same as intervals[1[0]])
  // IF (start <= last)
    // result.at(-1)[1] = max(last, intervals[i][1])
  // ELSE  result.push(intervals[i])
  

var merge = function(intervals) {
  const n = intervals.length
  intervals.sort((a, b) => a[0] - b[0])
  let result = [intervals[0]]
  
  for (let i = 1; i < n; i++) {
    let lastEnd = result.at(-1)[1]
    let start = intervals[i][0]

    if (start <= lastEnd) {
      result.at(-1)[1] = Math.max(lastEnd, intervals[i][1])
    } else {
      result.push(intervals[i])
    }
  }
  return result
};

console.log(merge([[1,3], [2,6], [8,10], [15,18]]))
console.log(merge([1,4], [0,4]))

// time complexity : O (n log n) 
