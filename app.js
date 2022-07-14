const isAnagram = (s, t) => {
  let hash = {}
  if (s.length !== t.length) return false

  for (let char of s) {
    hash[char] = (hash[char] || 0) + 1
  }

  for (let char of t) {
    if (!hash[char]) return false
    hash[char] -- 
  }

  return true
}

console.log(isAnagram('fodo', 'doof'))