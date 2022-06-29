/*
Write a function groupIn10s which takes any number of arguments, groups them into tens, and sorts each group in ascending order.

The return value should be an array of arrays, so that numbers between 0 and9 inclusive are in position 0, numbers between 10 and 19 are in position 1, etc.

Here's an example of the required output:
*/

function groupIn10s(...numbers) {
  let result = []

  for (let number of numbers) {
     let group = Math.floor(number/10)
     if (!result[group]) result[group] = []
     result[group].push(number)
  }
  return result.map(num => num.sort())
}

console.log(groupIn10s(8, 12, 38, 3, 17, 19, 25, 35, 50))


/*

const grouped = groupIn10s(8, 12, 38, 3, 17, 19, 25, 35, 50) 

grouped[0]     // [3, 8]
grouped[1]     // [12, 17, 19]
grouped[2]     // [25]
grouped[3]     // [35, 38]
grouped[4]     // undefined
grouped[5]     // [50]


*/