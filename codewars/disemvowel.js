/*

Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.

*/

function disemvowel(str) {  
  const checker = ['a', 'e', 'i', 'o', 'u']
  let newString = ''

  for (let i = 0; i <= str.length; i++) {
    let char = str.charAt(i)
    if (checker.indexOf(char) == -1) {
      newString += char
    }    
  }  
  return newString  
}

/*

regex solution

function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '')
}

filter method

function disemvowel(str) {
  const vowels = 'aeiou'

  return str
  .split('')
  .filter(letter => !vowels.includes(letter.toLowerCase()))
  .join('')
}

console.log(disemvowel("N ffns bt,\nYur wrtng s mng th wrst \'v vr rad"))

*/