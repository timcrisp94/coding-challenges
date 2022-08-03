/*
Given an array of intervals intervals where intervals[i] = [starti, endi], return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.

Ex : Input: intervals = [[1,2],[2,3],[3,4],[1,3]]
Output: 1
Explanation: [1,3] can be removed and the rest of the intervals are non-overlapping.

pseudo
st             end
1____2____3____4
1----2
     2----3
          3----4
1---------3


- array intervals, intervals[i] = [starti, endi]
- sort intervals
- let prev = int[0]
- iterate through intervals, compare adjacent pairs
-- if i[0] < prev[1], result++
-- else int[i] = prev
- return result 
*/

const eraseOverlapIntervals = function(intervals) {
  if (!intervals.length) return 0  
  intervals.sort((a, b) => a[1] - b[1])

  let result = 0
  let prev = intervals[0]   
  
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < prev[1]) {      
      result++      
    } else {
      prev = intervals[i]
    }
  }
  return result
}

console.log(eraseOverlapIntervals([[1,2],[2,3],[3,4],[1,3]])) 

// “Greedy is an algorithmic paradigm that builds up a solution piece by piece, always choosing the next piece that offers the most obvious and immediate benefit. Greedy algorithms are used for optimization problems. An optimization problem can be solved using Greedy if the problem has the following property: At every step, we can make a choice that looks best at the moment, and we get the optimal solution of the complete problem”. 