/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

an Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false

- pseudo - 
function(s, t)
hash = {}
edge - if s.len !== t.len 
for char of s
  add to hash
for char of t
  if !hash[char]

*/


const isAnagram = function(s, t) {
  const hash = {}

  if (s.length !== t.length) return false

  for (let char of s) {
    hash[char] = (hash[char] || 0) + 1
  }

  for (let char of t) {
    if (!hash[char]) return false
    hash[char]--
  }
  return true
}

console.log(isAnagram("anagram", "nanagram"))
console.log(isAnagram("anagram", "nagrama"))