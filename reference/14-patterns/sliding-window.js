// SLIDING WINDOW
// to perform operation on a specific window size of an array or linked list

// Ways to Identify
// input is a linear data structure (array, linked list, string)
// asked to find the longest/shortest substring, subarray, or desired value

// Common Problems
// max sum subarray of size k
// longest substring with k distinct characters
// string anagrams

// function slidingWindow(data, k)
// const n = data.length
// if (n < k) return null
// let result = 0
// for let i = 0 UP TO k
  // result += data[i]
// let currSum = result
// for let i = k UP TO n
  // currSum += arr[i] - arr[i - k]
  // result = Max(result, currSum)
// return result

// MAX SUM SUBARRAY OF SIZE K
function maxSum(arr, k) {
  const n = arr.length
  if (n < k) return null
  let result = 0
  
  // sum of first window of size k
  for (let i = 0; i < k; i++) {
    result += arr[i]
  }
  
  // sums of remaining windows
  let currSum = result
  for (let i = k; i < n; i++) {
    // slide window one index right
    currSum += arr[i] - arr[i - k]
    // result = max of result and currSum
    result = Math.max(result, currSum)
  }
  return result
}

console.log(maxSum([1,4,2,10,2,3,1,0,20], 4)) // output: 24

// LONGEST SUBSTRING WITHOUT REPEATING CHARACTERS
const lengthOfLongestSubstring = (s) => {
  const n = s.length
  const map = new Map()
  let left = 0
  let longest = 0

  for (let right = 0; right < n; right++) {
    let currChar = s[right]
    let currCharPosition = map.get(currChar)

    while (currCharPosition >= left) {
      left = currCharPosition + 1
    }

    map.set(currChar, right)
    longest = Math.max(longest, right - left + 1)
  }
  return longest
}

console.log(lengthOfLongestSubstring("abcabcbb")) //output: 3