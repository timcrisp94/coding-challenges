/*
Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

Note that the same word in the dictionary may be reused multiple times in the segmentation.

Example 1:

Input: s = "leetcode", wordDict = ["leet","code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".

pseudo :
dynamic w/ cache
dp = [false] * len + 1
dp[len] = true
iterate chars
  iterate words in dict
    if word in string, dp[i] = true
*/

const wordBreak = (s, wordDict) => {
  const n = s.length
  let dp = new Array(n + 1).fill(false)
  dp[n] = true

  for (let i = n - 1; i >= 0; i--) {
    for(let w of wordDict){
      if (i + w.length <= n && s.substring(i, i + w.length) === w) {
        dp[i] = dp[i + w.length];
      }
      if (dp[i]) break        
    }
  }
  return dp[0]
}

// alt dp

const wordBreakDPAlt = (s, wordDict) => {
  const n = s.length
  if (wordDict === null || wordDict.length === 0) return false

  const set = new Set(wordDict)
  const dp = Array(n + 1).fill(false)
  dp[0] = true

  for (let end = 1; end <= n; end++) {
    for (let start = 0; start < end; start++) {
      const w = s.slice(start, end) 
        if (dp[start] === true && set.has(w)) {
          dp[end] = true
          break
        }
    }
  }
  return dp[n]
}

// bfs - this seems much slower
const wordBreakBFS = (s, wordDict, n = s.length) => {
  if (wordDict === null || wordDict.length === 0) return false
  const set = new Set(wordDict)

  const visited = new Set()
  const q = [0]

  while (q.length) {
    const start = q.shift()

    if (!visited.has(start)) {
      for (let end = start + 1; end <= n; end++) {
        if (set.has(s.slice(start, end))) {
          if (end = n) return true
          q.push(end)
        }
      }
      visited.add(start)
    }
  }
  return false
}

console.log(wordBreak('leetcode', ['leet', 'code']))
console.log(wordBreakDPAlt('leetcode', ['leet', 'code']))
console.log(wordBreakBFS('leetcode', ['leet', 'code']))
