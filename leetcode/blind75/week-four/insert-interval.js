/*

You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.

Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).

Return intervals after the insertion.

Input [[1,3], [6,9]], new = [2,5] -> [[1,5], [6,9]]
Input [[4,5], []]

pseudo : O (nlogn)
--of course we draw a number line--
-interate intervals
--does new overlap with current ? find insertion point
-- (if new[1] < curr[0]) add new interval to result
  -- return result + remaining intervals  
-- elif new[0] > cur[1] add cur to result
-- else new = [min(new[0], cur[1]), max(new[1], cur[1])

*/
/*
function (s,f)
n=s.length
A=Array
k=0
for m=0 to n
 if s[m[start]] < f[k[end]]
 A[start,end]
return A
*/ 


const insert = function(intervals, newInterval) {
  let n = intervals.length
  if (n === 0) {
    return [ newInterval ]
  }

  const result = []
  let flag = 0
  let i

  for (i = 0; i < n; i++) {
    const interval = intervals[i]
    if (newInterval[0] > interval[1]) {
      result.push(interval)
    } else if (newInterval[1] < interval[0]) {
      result.push(newInterval)
      flag = 1
      break
    } else {
      newInterval[0] = Math.min(interval[0], newInterval[0])
      newInterval[1] = Math.max(interval[1], newInterval[1])
    }
  }
  
  if (flag === 0) {
    result.push(newInterval)
    return result
  } else {
    return result.concat(intervals.splice(i))
  }
}

console.log(insert([[1,3],[6,9]], [2,5]))