/*

Create a function with two arguments that will return an array of the first (n) multiples of (x).

Assume both the given number and the number of times to count will be positive numbers greater than 0.

Return the results as an array

*/
function countBy(x, n) {
  let z = []
  
  for (let i = x; i <= x * n; i += x) {
    console.log(i)
  }

}

console.log(countBy(2, 5))

/*
/original solution

function countBy(x, n) {
  let z = []
  
  for (let i = x; i <= x * n; i++) {
    if (i % x === 0) {
      z.push(i)
    }
  }

  return z
}

/refactored - shorter run time

function countBy(x, n) {
  let z = []
  
  for (let i = 1; i <= n; i++) {
    z.push(x * i)
  }

  return z
}

/ another refactor - increase i by x

function countBy(x, n) {
  let z = []
  
  for (let i = x; i <= x * n; i += x) {
    console.log(i)
  }

}



*/