/*
given a string s, return the number of palindromic substrings in it
*/

const countSubstrings = function(s) {
  let result = 0

  for (let i = 0; i < s.length; i++) {
    let leftOdd = i
    let rightOdd = i
    result += countPali(s, leftOdd, rightOdd)

    let leftEven = i
    let rightEven = i + 1
    result += countPali(s, leftEven, rightEven)
  }
  return result
}

const countPali = function(s, left, right) {
  let result = 0

  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--
    right++
    result++
  }
  return result
}

console.log(countSubstrings('abc'))