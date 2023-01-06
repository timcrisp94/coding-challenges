/*
- pseudo -
const n = s.length
let maxLen = 0
let maxStr = ''
let i, temp, posIndex
FOR i UPTO N
  temp = s[i]
  posIndex = maxStr.indexOf(temp)
  IF posIndex > -1
    maxStr = maxStr.substring(posIndex + 1)
  maxStr += temp
  maxLen = Max(maxLen, maxStr.length)
return maxLen

* indexOf : The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.

const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log(beasts.indexOf('bison'));
expected output: 1

start from index 2
console.log(beasts.indexOf('bison', 2));


test input: "abcabbcc"
*/

const lengthOfLongestSubstring = (s) => {
  const n = s.length
  let maxLen = 0
  let maxStr = ''
  let i, temp, posIndex

  for (i = 0; i < n; i++) {
    temp = s[i]
    posIndex = maxStr.indexOf(temp)
    // console.log (temp, posIndex, i)
    
    if (posIndex > -1) {
      maxStr = maxStr.substring(posIndex + 1)
      // console.log(maxStr)
    }

    maxStr += temp
    maxLen = Math.max(maxLen, maxStr.length)
  }
  return maxLen
}

console.log(lengthOfLongestSubstring("abcabcbb"))