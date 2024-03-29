/* 647/29. PALINDROMIC SUBSTRINGS

given a string s, return the number of palindromic substrings in it

-palindrome
-substring

example 1:
input: s = "abc"
output: 3
"a", "b", "c"

- pseudo - 
function countSubstrings(s)
  const n = s.length
  let result = 0
  FOR let i upto n
    let leftOdd = i
    let rightOdd = i
    result += countPali(s, leftOdd, rightOdd)
    "" (leftEven)
    let rightEven = i + 1
    "" (countPali(even))
  return result
function countPali(s, left, right)
  const n = s.length
  let result = 0
  while (
    left >= 0 && 
    right < n 
    && s[left] === s[right]
  ) {
    left--
    right++
    result++
  }
  return result
}

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