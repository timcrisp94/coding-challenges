/* 3/17. LONGEST SUBSTRING WITHOUT REPEATING CHARACTERS
* sliding window *

Given a string s, find the length of the longest substring without repeating characters.

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

- pseudo - 
const n = s.length
const map = new Map()
left, longest = 0, 0
FOR let right UPTO N
  curChar = s[right]
  curCharPosition = map.get(curChar)
    WHILE curCharPos >= right
      left = curCharPos + 1
    map.set(curChar, right)
    longest = max(longest, right - left + 1)
return longest

*/

const lengthOfLongestSubstring = function(s) {
  const map = new Map()
  let left = 0
  let right = 0
  let longestLength = 0

  for (right; right < s.length; right++) {
    let currChar = s[right]
    let currCharPosition = map.get(currChar)

    while (currCharPosition >= left) {
      left = currCharPosition + 1
    }
    map.set(currChar, right)
    longestLength = Math.max(longestLength, right - left + 1)
  }
  return longestLength
}

console.log(lengthOfLongestSubstring("abcabcbb"))