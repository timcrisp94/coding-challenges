/*
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
*/

// array of strings
// - hash
// - result
// - iterate strings
// - sort letters
// - if in map, group together and push
// return group anagrams
// 

// o(n) runtime

const groupAnagrams = function(strs) {
  // hash to keep track of letters,
  // and their corressponding words
  const wordMap = {}
  // result array for our groupings
  let result = []

  // iterate through strs
  for (let word of strs) {
    // split letters
    let letters = word.split('').sort().join('')
    // check hash for letters; if !wordMap[letters] add an empty array
    wordMap[letters] = wordMap[letters] || []
    // push word into array
    wordMap[letters].push(word)
  }

  // iterate object  
  for (let value in wordMap) {
    // push arrays into result array
    result.push(wordMap[value])
  }
  
  return result
}

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))