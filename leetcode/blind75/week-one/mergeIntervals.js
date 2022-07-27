/*
Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

Example
input : [1,3], [2,6], [8,10], [15,18]
output : [1,6], [8,10], [15,18]

*/

// O (n log n)
// sort intervals by first element
// let result = [intervals[0]]
// iterate through intervals
  // if intervals[i][0] is less than or equal to last end (result.at(-1)[1])
    // last end = max(lastend, intervals[i][1])
  // else push interval to result
// return result

var merge = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0])
  let result = [intervals[0]]
  
  for (let i = 1; i < intervals.length; i++) {
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