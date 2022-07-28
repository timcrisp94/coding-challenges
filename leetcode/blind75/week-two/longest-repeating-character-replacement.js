/*
You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

Return the length of the longest substring containing the same letter you can get after performing the above operations.

Example 1:

Input: s = "ABAB", k = 2
Output: 4
Explanation: Replace the two 'A's with two 'B's or vice versa.
*/

const characterReplacement = function(s, k) {
  const count = {}
  let left = 0
  let right = 0
  let maxCharCount = 0

  while (right < s.length) {
    count[s[right]] = (count[s[right]] || 0) + 1
    maxCharCount = Math.max(maxCharCount, count[s[right]])
    console.log(maxCharCount)
    // length of window - maxCharCount must be less than k
    if (right - left + 1 - maxCharCount > k) {
      count[s[left]]--
      left++
    }
    right++
  }
  return right - left  
}

console.log(characterReplacement("AABABBA", 1))