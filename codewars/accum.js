/*
This time no story, no theory. The examples below show you how to write function accum:

accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"

*/

function accum(str) {
  var letters = str.split('');
  var result = [];
  for (var i = 0; i < letters.length; i++) {
    result.push(letters[i].toUpperCase() + Array(i + 1).join(letters[i].toLowerCase()));
  }
  return result.join('-');
}

console.log(accum('string'))

/*

function accum(s) {
  return s
  .split('')
  .map((c, i) => 
  (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-')
}

console.log(accum('string'))
*/