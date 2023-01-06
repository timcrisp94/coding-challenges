/* 76/22. MINIMUM WINDOW SUBSTRING

Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

The testcases will be generated such that the answer is unique.

A substring is a contiguous sequence of characters within the string.

*/

const minWindow = function(s, t) {
  let arr = new Array(128).fill(0)
  let result = [-Infinity, Infinity]
  let missing = t.length
  let n = s.length

  for (let i = 0; i < missing; i++) {
    arr[t.charCodeAt(i)]++
  }

  let start = 0
  for (let end = 0; end < n; end++) {
    if(arr[s.charCodeAt(end)] > 0) {
      missing--
    }
    arr[s.charCodeAt(end)]--

    while (missing === 0) {
      if (result[1] - result[0] > end - start){
        result[1] = end
        result[0] = start
      }
      arr[s.charCodeAt(start)]++

      if (arr[s.charCodeAt(start)] > 0) {
        missing++
      }
      start++
    }
  }
  return result[1] == Infinity ? "" : s.slice(result[0], result[1]+1)
}

console.log(minWindow("ADOBECODEBANC", "ABC"))