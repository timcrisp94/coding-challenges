/*
Given a string, return true if the string is a palindrome, false if not
*/

function palindrome(str) {
   return str.split('').every((char, i) => {
      return char === str[str.length - i - 1]
   })
   
}

console.log(palindrome('apple'))
console.log(palindrome('racecar'))

/*

/ two solutions using manually reversed str

function palindrome(str) {
   if (str === str.split('').reverse().join('')) {
      return true
   }
   return false
}

function palindrome(str) {
   const reverse = str.split('').reverse().join('')
   if (str === reverse) {
      return true
   }
   return false
}

*/