/*
pseudo
- edge case
- initialize hash map
- declare result = '' 
- let count
- iterate t and add chars to countT
- iterate over s
-- let c = s[i]
-- add c to window hash
-- if c is in countT && window === countT, have +=1
-- while have = need
--- if (r - l + 1) < resLen
  -- result = [l, r]
  -- resLen = (r - l + 1)
  -- decriment left side of window by one
   -- if removed character was in countT and window, have -= 1
   -- l ++
l, r = result
if result != 0 
- return `s[l] + s[r + 1]
- else return ''

*/


const minWindow = function(s, t) {
  let map = new Map()  
  let left = 0
  let right = 0
  let result = ''
  let count

  for (let i = 0; i < t.length; i++) {
    if (!map.has(t[i])) map.set(t[i], 0)
    map.set(t[i], map.get(t[i]) + 1)
  }
  
  count = map.size
  while (right < s.length) {
    const rightChar = s[right]
    if (map.has(rightChar)) {
      map.set(rightChar, map.get(rightChar) - 1)
      if (map.get(rightChar) === 0) count--      
    }

    while (count === 0) {
      const leftChar = s[left]

      if (result === "" || result.length > (right - left + 1)) {
        result = s.slice(left, right + 1)
      }

      if (map.has(leftChar)) {
        map.set(leftChar, map.get(leftChar) + 1)
        if (map.get(leftChar) >= 1) count++
      }
      left++      
    }
    right++
  }
  return result  
}


console.log(minWindow("ADOBECODEBANC", "ABC"))
