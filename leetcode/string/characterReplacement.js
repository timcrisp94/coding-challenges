/*

Input: s = "ABAB", k = 2
Output: 4
Explanation: Replace the two 'A's with two 'B's or vice versa.
Example 2:

Input: s = "AABABBA", k = 1
Output: 4
Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
The substring "BBBB" has the longest repeating letters, which is 4.
*/

// binary search
// set initial values for left and right to first and last numbers of array
// if input array.length is 1, return number
// if left val is less than right, the input array is not rotated, return left val
// binary search for right val less than left

var characterReplacement = function(s, k) {
  const chars = {}
  let left = 0
  let right = 0
  let maxCharCount = 0

  while (right < s.length) {
    const char = s[right]
    chars[char] = chars[char] + 1 || 1

    if (chars[char] > maxCharCount) {
      maxCharCount = chars[char]
    }

    if (right - left + 1 - maxCharCount > k) {
      chars[s[left]]--
      console.log(chars[s[left]])
      left++
    }
    right++
  }
  return right - left
};

console.log(characterReplacement('ABAB', 2))

var characterReplacement2 = function(s, k) {
  // Keep count of all the characters in the string
  const chars = {}
  // left pointer, character with the current max frequency, return value
  let left = 0, maxf = 0, output = 0
  for(let right = 0; right < s.length; right++) {
      const char = s[right]
      // Increment count of the current character
      chars[char] = 1 + (chars[char] || 0)
      // Update the character frequency
      maxf = Math.max(maxf, chars[char])
      // Shrink the window of characters we are looking at until we can have a window of all the same characters + k charcters to change
      while((right-left+1) - maxf > k) {
              chars[s[left]] -= 1
              left++
        }
      // Update the output if the current window is greater than our previous max window
      output = Math.max(output, right - left +1)
  }
  return output
};