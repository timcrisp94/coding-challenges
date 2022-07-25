/*
Given a string s, find the length of the longest substring without repeating characters.

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
*/

// const lengthOfLongestSubstring = function(s) {
//   // initial map, left pointer, and counter
//   const map = new Map()
//   let left = 0, longestSub = 0
//   // base case
//   if (s.length === 1) return 1
//   // iterate over string, set right pointer variable
//   for (let right = 0; right < s.length; right++) {
//     // initialize currentChar variable, and currentCharPosition (in map)
//     let currentChar = s[right]
//     let currentCharPosition = map.get(currentChar)
//     // if the currentChar exists in the map and was found within the current window
//     while (currentCharPosition >= left) {
//       // move current window
//       left = currentCharPosition + 1
//     }
//     // add character to map in its position
//     map.set(currentChar, right)
//     // update longestSub
//     longestSub = Math.max(longestSub, right - left + 1)
//   }
//   return longestSub
// }

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
console.log(lengthOfLongestSubstring('abcabcbb'))