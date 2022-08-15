/*

Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different.

It is guaranteed that the number of unique combinations that sum up to target is less than 150 combinations for the given input.

Input: candidates = [2,3,6,7], target = 7
Output: [[2,2,3],[7]]
*/


const combinationSum = function(candidates, target) {
  const n = candidates.length
  candidates.sort((a, b) => a - b)
  const combos = []
  const combo = []
  const set = new Set(candidates)
  buildCombos(target)
  return combos

  function buildCombos(target, start = 0) {
    if (set.has(target)) {
      combo.push(target)
      combos.push(combo.slice())
      combo.pop()
    }

    const mid = Math.floor(target / 2)
    for (let i = start; i < n && candidates[i] <= mid; i++) {
      const candidate = candidates[i]
      combo.push(candidate)
      buildCombos(target - candidate, i)
      combo.pop()
    }
  }
}

console.log(combinationSum([2,3,6,7], 7))
// recursive
function combinationSumR(candidates, target) {
  if (!candidates) return []
  if (target === 0) return [[]]
  let n = candidates.length
  candidates.sort((a,b) => a-b)
  let paths = []

  const find = function(t,p,i) {
    if (t === 0) {
      paths.push(p)
      return
    } else if (t < 0) {
      return
    } else {
      while (i < n && t - candidates[i] >= 0) {
        find (t - candidates[i], [...p, candidates[i]], i)
        i++
      }
    }
  }
  find (target, [], 0)
  return paths
}

console.log(combinationSumR([2,3,6,7], 7))