/*
Given a string s, find the length of the longest substring without repeating characters.

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

*/

const lengthOfLongestSubstring = function(s) {
  const map = new Map()
  let left = 0, longestSubstring = 0

  if (s.length === 1) return 1

  for (let right = 0; right < s.length; right++) {
    let currentChar = s[right]
    let currentCharPosition = map.get(currentChar)

    while (currentCharPosition >= left) {
      left = currentCharPosition + 1
    }

    map.set(currentChar, right)
    longestSubstring = Math.max(longestSubstring, right - left + 1)
  }
  return longestSubstring
}

console.log(lengthOfLongestSubstring("abcabcbb"))