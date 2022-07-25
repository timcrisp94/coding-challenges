const isAnagram = function(s, t) {
  const hash = {}

  if (s.length !== t.length) return false

  for (let char of s) {
    hash[char] = (hash[char] || 0) + 1
  }

  for (let char of t) {
    if (!hash[char]) return false
    hash[char]--
  }
  return true
}

console.log(isAnagram("anagram", "nanagram"))
console.log(isAnagram("anagram", "nagrama"))