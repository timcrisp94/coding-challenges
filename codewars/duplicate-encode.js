/*

The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 

*/

function duplicateEncode(word) {
  word = word.toLowerCase()

  return word.replace(/./g, m => word.indexOf(m) === word.lastIndexOf(m) ? '(' : ')')
}

/*
map function

function duplicateEncode(word) {
  return word
  .toLowerCase()
  .split('')
  .map(function(a, i, w) {
    return w.indexOf(a) === w.lastIndexOf(a) ? '(' : ')'
  })
  .join('')
}


for of / ternary

function duplicateEncode(word){
  const unique = ''
  word = word.toLowerCase()

  for (let char of word) {
    word.lastIndexOf(char) === word.indexOf(char) ? 
    unique += '(' : unique += ")"
  }

  return unique
}

*/

console.log(duplicateEncode('recede'))