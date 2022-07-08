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

function fib(n, memo) {
  memo = memo || {} // 1

  if (memo[n]) return memo[n] // 2
  if (n <= 1) return 1

  return memo[n] = fib(n - 1, memo) + fib(n - 2, memo) // 3
}

console.log(fib(5))

// 1 check if we've receive the memo object parameter; if not return an empty object 
// 2 check if memo contains the value n; if it does, return that
// 3 if we don't have the value, call fib again but passing memo as a parameter so we can share the memoized values 

function makePerson(name) {
  let _name = name
  return {
    setName: (newName) => (_name = newName),
    getName: () => _name
  }
}

const me = makePerson('Tim')
console.log(me.getName())

me.setName('Tim Crisp')
console.log(me.getName())