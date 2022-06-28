function getCount(str) {
  let count = 0
  const vowels = 'aeiou'

  for (let char of str.split('')) {
    if (vowels.includes(char)) {
      count += 1
    }
  }

  return count
}

console.log(getCount('fart'))