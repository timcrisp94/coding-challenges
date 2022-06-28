function getCount(str) {
  return str.split('').filter(c => 'aeiou'.includes(c)).length
}

console.log(getCount('fart'))