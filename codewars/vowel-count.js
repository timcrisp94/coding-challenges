function getCount(str) {
  let count = 0
  
  for (let char of str.split('')) {
    if ('aeiou'.includes(char)) {
      count += 1
    }
  }

  return count
}

console.log(getCount('fart'))

/*

filter method

function getCount(str) {
  return str.split('').filter(c => 'aeiou'.includes(c)).length
}

regex

function getCount(str) {
  return str.replace(/[^aeiou]/gi, '').length
}


*/