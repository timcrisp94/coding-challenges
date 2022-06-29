/*
Given a string, return true if the string is a palindrome, false if not
*/

function palidrome(str) {
   str === str.split('').reverse().join('') ? true : false
}

console.log(palindrome('apple'))
console.log(palindrome('racecar'))
/*

*/