/*

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1: 

Input: s = "anagram", t = "nagaram"
Output: true

Example 2:

Input: s = "rat", t = "car"
Output: false

const isAnagram = function(s, t) {
    if (s.length !== t.length) return false;    
    const map = {};    
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]]) {
            map[s[i]] = ++map[s[i]];
        }       
        else {
            map[s[i]] = 1;
        }
    }

    for (let i = 0; i < t.length; i++) {
        if (!map[t[i]]) return false;
        map[t[i]] = --map[t[i]];
    }
    return true;
};
*/
// const isAnagram = function(s, t) {
//   if (s.length !== t.length) return false
//   const map = {}
//   for (i = 0; i < s.length; i++) {
//     if (map[s[i]]) {
//       map[s[i]] = ++map[s[i]]
//     }
//     else {
//       map[s[i]] = 1
//     }
//   }
//   for (let i = 0; i < t.length; i++) {
//     if (!map[t[i]]) return false 
//     map[t[i]]= --map[t[i]]
//   }
//   return true
// }

// O(n)
// const isAnagram = (s, t) => {
//   let hash = {}
//   if (s.length !== t.length) return false

//   for (let char of s) {
//     hash[char] = (hash[char] || 0) + 1
//   }

//   for (let char of t) {
//     if (!hash[char]) return false
//     hash[char] -- 
//   }

//   return true
// }

const isAnagram = (s, t) => {
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
console.log(isAnagram("anagram", "anagram"))

