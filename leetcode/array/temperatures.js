// Given an array of integers temperatures representing the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.

// Example 1:

// Input: temperatures = [73,74,75,71,69,72,76,73]
// Output: [1,1,4,2,1,1,0,0]

const dailyTemperaturesP = function(temperatures) {
  const n = temperatures.length
  if (n === 0) return null
  // let result = A length n, fill with 0's
  let result = Array.from({length: n}, x => 0)
  // initialize stack 
  let stack = []
  // iterate temperatures, initialize stack
  for (let i = 0; i < n; i++) {
    // while we have elements in our stack and while temperature[i] is greater than the day before
    while (stack.length > 0 && temperatures[stack[stack.length - 1]] < temperatures[i]) {
      let j = stack.pop()
      result[j] = i - j
    }
    stack.push(i)
  }
  return result
};

const dailyTemperatures = function(temperatures) {
  const n = temperatures.length
  if (n === 0) return null
  let result = new Array(n).fill(0)
  let stack = []

  for (let i = 0; i < n; i++) {
    while (stack.length && temperatures[stack[stack.length - 1]] < temperatures[i]) {
      let j = stack.pop()
      result[j] = i - j
    }
    stack.push(i)
  }
  return result
}

console.log(dailyTemperatures([73,74,75,71,69,72,76,73]))