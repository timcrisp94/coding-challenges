/*
Write a function that accepts a string. Function should capitalize the first letter of each word in the string then return the capitalized string
*/

// str.slice(begin index, end)
// to uppercase

function capitalize(str) {
  const words = []

  for (let word of str.split(' ')) {
    words.push(word[0].toUpperCase() + word.slice(1))
  }
  
  return words.join(' ')
}

console.log(capitalize('a short sentence')

)

/*
/ make an empty array 'words'
/ split input string by spaces to get an array
/ for each word
  / uppercase the first letter of the word
  / join the first letter with the rest of the string
  / push result into words array
/ join words, return

function capitalize(str) {
  const words = []

  for (let word of str.split(' ')) {
    words.push(word[0].toUpperCase() + word.slice(1))
  }
  return words.join(' ')
}

/ create an empty string called result
/ for each character in the string
  / if the character to the left is a space
    / capitalize it and add it to the result
  / else
    / add it to result

function capitalize(str) {
  let result = str[0].toUpperCase()

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === ' ') {
      result += str[i].toUpperCase()
    } else {
      result += str[i]
    }
  }
  return result
}
*/