/* COMMON STRING QUESTIONS:
  -most common char
  -anagram
  -repeated characters

string > object (keys= char, value= number of times)

*/

const string = "Hello There!"
const charMap = {}

for (let char of string) {
   charMap[char] = charMap[char] + 1 || 1  
}

console.log(charMap)

// ITERATING THROUGH A CHARACTER MAP

// counting
let max = 0
let maxChar = ''

for (let char in charMap) {
  if (charMap[char] > max) {
    max = charMap[char]
    maxChar = char
  }
  
}