// cache output of a function
// - temporary data store
// - access data obvi

// closures : the function + the lexical environment of the function
  // dude, fuck, yes

// higher order functions : functions that operate on other functions by taking them as the argument or by returning them.

/*
const fib = n => {
  if (n <= 1) return 1
  return fib(n - 1) + fib(n - 2)
}
*/
// uses recursion and higher order

//  - memoization -

// function fib(n, memo) {
//   memo = memo || {} // 1

//   if (memo[n]) return memo[n] // 2
//   if (n <= 1) return 1

//   return memo[n] = fib(n - 1, memo) + fib(n - 2, memo) // 3
// }

// console.log(fib(5))

// 1 check if we've receive the memo object parameter; if not return an empty object 
// 2 check if memo contains the value n; if it does, return that
// 3 if we don't have the value, call fib again but passing memo as a parameter so we can share the memoized values 

// Memoization is a top-down, depth-first optimization technique of storing previously executed computations

/*
USE MEMOIZATION WHEN:

- a function is pure (ie the function returns the same value when called)
- heavy computing : this way the function doesn't have to recalculate its values
- remote api calls
- a function that recalls itself with recurring input values (ie recursive functions)
*/

// write a function that takes a number n as an argument and returns the provided number's square

function squareBrute(n) {
  let result = 0

  for (let i = 1; i <= n; i++) {
    for (let j = 1; i <= n; j++) {
      result ++
    }
  }
  return result
}

// runtime : O(N^2)

// function takes a function and returns a function
const memoize = (func) => {
  // cache
  const results = {}
  // returns a function for the cache of results
  return (...args) => {
    // JSON key to save the results cache
    const argsKey = JSON.stringify(args)
    // executes only if there is no cached value
    if (!results[argsKey]) {
      // store return value of function parameter
      results[argsKey] = func(...args)
    }
    // return the cached results
    return results[argsKey]
  }
}

// wrap brute force function in memoize()
const squareBroot = memoize(num => {
  let result = 0
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= num; j++) {
      result++
    }
  }
  return result
})

console.log(squareBroot(10)) // runtime : 0(N)

// similar ex

const memoizedValue = []
function bruteForceSquare(n) {
  if (memoizedValue[n] == !undefined) {
    return memoizedValue[n]
  }

  let result = 0
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      result++
    }
  }
  memoizedValue[n] = result
  return result
}

console.log(bruteForceSquare(12))

// fibonacci

function fibonacci(n) {
  if (n <= 2) {
    return 1
  }

  return fibonacci(n - 2) + fibonacci(n - 1)
}

console.log(fibonacci(5)) // runtime : O(2 ^ N)

const fibonacciMemoize = ((n) => {
  if (n <= 2) {
    return 1
  } 
  return fibonacciMemoize(n - 2) + fibonacciMemoize(n -1)
})

console.log(fibonacciMemoize(5))


/*
function fib(n, memo) {
  memo = memo || {} // 1

  if (memo[n]) return memo[n] // 2
  if (n <= 1) return 1

  return memo[n] = fib(n - 1, memo) + fib(n - 2, memo) // 3
}

console.log(fib(5))
*/

function fibMemoize(n, memo) {
  memo = memo || {}

  if (memo[n]) return memo[n]
  if (n <= 1) return 1

  return memo[n] = fibMemoize(n - 2, memo) + fibMemoize(n - 1, memo)
}

function fibMemo(n, memo) {
  memo = memo || {}

  if (memo[n]) return memo[n]
  if (n <= 1) return 1

  return memo[n] = fibMemo(n - 2, memo) + fibMemo(n - 1, memo)
}

function fM(n, memo) {
  memo = memo || {}

  if (memo[n]) return memo[n]
  if (n <= 1) return 1

  return memo[n] = fM(n - 2, memo) + fM(n - 1, memo)
}


console.log(fM(450))