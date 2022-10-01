/*
49. GROUP ANAGRAMS

Given an array of strings strs, group the anagrams together. You can return the answer in any order.

example
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

- pseudo - 
hash = {} (store values)
result = []
FOR let string of strings
  let letters = s[sorted letters]
  add letters to hash[letters] or set hash[letters] and []
  add string to hash[letters] []
FOR let value in hash
  result.push(hash[value])
return result

*/


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

// time : o(n)

// solution with notes

const groupAnagramsNotes = function(strings) {
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

console.log(groupAnagramsNotes(["eat","tea","tan","ate","nat","bat"]))

/*

*/