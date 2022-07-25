const groupAnagrams = function(strings) {
  // hash to keep track of letters
  // and their corresponding words
  const wordMap = {}
  let result = []

  // iterate through strings
  for (let word of strings) {
    // split letters
    let letters = word.split('').sort().join('')
    // check hash for letters; if !wordMap[letters] add an empty array
    wordMap[letters] = wordMap[letters] || []
    // push word into array
    wordMap[letters].push(word)
  }

  for (let key in wordMap) {
    result.push(wordMap[key])
  }
  return result
}

const grouppAnagrams = function(strings) {
  const wordMap = {}
  let result = []

  for (let word of strings) {
    let letters = word.split('').sort().join('')
    wordMap[letters] = wordMap[letters] || []
    wordMap[letters].push(word)
  }

  for (let key in wordMap) {
    result.push(wordMap[key])
  }
  return result
}

