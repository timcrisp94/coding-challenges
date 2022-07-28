/*
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

example
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
*/

// hash to store letters
// result = []
// iterate strs
//  letters = str.split.sort.join
//  hash[letters] = hash[letters] || []
//  push word to array
// iterate object
  // push arrays to result array
// return array

const groupAnagrams = function(strs) {
  const hash = {}
  const result = []

  for (let str of strs) {
    let letters = str.split('').sort().join('')
    hash[letters] = hash[letters] || []
    hash[letters].push(str)
  }

  for (let value in hash) {
    result.push(hash[value])
  }
  return result
}

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))