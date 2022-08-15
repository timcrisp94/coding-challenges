/*
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

example
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

pseudo
group anagrams function(strings)
/ n = strings.length
/ store values (key = hash[letters] : values = [values]) 
const hash = {}
/ return variable results, array of arrays
result = array of arrays
/ for each string < n (O(n))
for let s of strings
  / var letters = s letters split, sort, join (O(m))
  let letters = s.split('').sort().join('')
  / add letters to hash[letters] or add hash[letters] and set an empty array
  / add s to hash[letters] array (letters: [s, s, s])
/ for each value in hash
for let value in hash
  result.push(hash[value])
return result
*/

const groupAnagramsP = function(strings) {
  // store values in hash (key,value = unique letters : [anagram strings])
  const hash = {}
  // result variable array 
  const result = []
  
  // for each string < strings.length
  for (let s of strings) {
    // let letters = s[sorted letters]
    let letters = s.split('').sort().join('')
    // add letters to hash[letters] or add (key, value) hash[letters] and set empty array
    hash[letters] = hash[letters] || []
    // add string to hash[letters] array
    hash[letters].push(s)
  }
  // for each value in hash
  for (let value in hash) {
    // push each to result
    result.push(hash[value])
  }
  return result

}

console.log(groupAnagramsP(["eat","tea","tan","ate","nat","bat"]))


const groupAnagrams = function(strings) {
  const hash = {}
  const result = []

  for (let s of strings) {
    let letters = s.split('').sort().join('')
    hash[letters] = hash[letters] || []
    hash[letters].push(s) 
  }

  for (let value in hash) {
    result.push(hash[value])
  }
  return result
}


console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))