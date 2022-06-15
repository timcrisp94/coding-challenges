
/*

https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript

Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

*/

// for each number
  // square each number and add the sum of those squared numbers together
// return the sum

function squareSum(numbers) {
  let result = 0
  for (let number of numbers) {
    result += number * number
  }
  return result
}

console.log(squareSum([1, 2, 2]))

// reduce method
function squareSumReduce(numbers) {
  return numbers.reduce(function(sum, n) {
    return (n*n) + sum
  }, 0)
}

function squareSumReduceArrow(numbers) {
  return numbers.reduce((sum, num) => sum + (num * num), 0)
}

console.log(squareSumReduce([1, 2, 2]))
console.log(squareSumReduceArrow([1, 2, 2]))