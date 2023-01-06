/* 424/16. LONGEST REPEATING CHAR REPLACEMENT

You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

Return the length of the longest substring containing the same letter you can get after performing the above operations.

Example 1:

Input: s = "ABAB", k = 2
Output: 4
Explanation: Replace the two 'A's with two 'B's or vice versa.

- PSEUDO - 
* sliding window *
n = s.len
hash = {}
left, right, max = 0
WHILE r < n
  hash[s[right]] = hash[s[right]] OR 0 + 1
  max = max(max, hash[s[right]])
  IF right - left + 1 - max > k
    hash[s[left]]--
    left += 1
  right += 1
return right - left

*/

const characterReplacement = function(s, k) {
  const count = {}
  let left = 0, right = 0, maxCharCount = 0
  
  while (right < s.length) {
    count[s[right]] = (count[s[right]] || 0) + 1
    maxCharCount = Math.max(maxCharCount, count[s[right]])

    if (right - left + 1 - maxCharCount > k) {
      count[s[left]]--
      left++
    }
    right++
  }
  return right - left
}

console.log(characterReplacement("AABABBA", 1))