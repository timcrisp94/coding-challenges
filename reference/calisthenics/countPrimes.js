/*
Given an integer n, return the number of prime numbers that are strictly less than n.
ex:

Input: n = 10
Output: 4
Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
*/

const countPrimes = function(n) {
  // brute force
  const isPrime = new Array(n).fill(true)
  isPrime[0] = false
  isPrime[1] = false

  for (let i = 2; i * i < n; i++) {
    if (!isPrime[i]) continue
    for (let j = i; i * j < n; j++) {
      isPrime[i * j] = false
    }
  }

  return isPrime.reduce((count, isPrime) => {
    if (isPrime) count += 1
    return count
  }, 0)
}

console.log(countPrimes(10))