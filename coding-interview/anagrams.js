/*

check to see if two provided strings are anagrams of each other (same characters, same quantity)
-lowercase letters, filter out spaces

*/

// RECALL - anagrams are best handled with a helper fuinction

// using dot sort
function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB)
}

function cleanString(str) {
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('')
}



console.log(anagrams('fetch', 'reset'))
console.log(anagrams('dormitory', 'dirty room'))

/*

/ using a character map

function anagrams(stringA, stringB) {
  const aCharMap = buildCharMap(stringA)
  const bCharMap = buildCharMap(stringB)
  
  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
    return false
  }

  for (let char in aCharMap) {
    if (aCharMap[char] !== bCharMap[char]) {
      return false
    }
  }

  return true
}

function buildCharMap (str) {
  const charMap = {}

  for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1
  }
  return charMap
}
*/