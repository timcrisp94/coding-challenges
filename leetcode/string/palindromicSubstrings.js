/*
given a string s, return the number of palindromic substrings in it
*/

// const palindromicSubstrings = function(s) {
//   let result = 0

//   for (let i = 0; i < s.length; i++) {
//     let left = i
//     let right = i

//     while (left >= 0 && right < s.length && s[left] === s[right]) {
//       result++
//       left--
//       right++
//     }

//     let leftE = i
//     let rightE = i + 1

//     while (leftE >= 0 && rightE < s.length && s[leftE] === s[rightE]) {
//       result++
//       leftE--
//       rightE++
//     }
//   }
//   return result
// }

const countSubstrings = function(s) {
  let result = 0

  for (let i = 0; i < s.length; i++) {
    let left = i
    let right = i
    result += countPali(s, left, right)

    let leftE = i
    let rightE = i + 1
    result += countPali(s, leftE, rightE)
  }
  return result
}

const countPali = function(s, left, right) {
  let result = 0

  while (left >= 0 && right < s.length && s[left] === s[right]) {
    result++
    left--
    right++
  }
  return result
}


console.log(countSubstrings("aaa"))