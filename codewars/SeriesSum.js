
/*

Your task is to write a function which returns the sum of following series upto nth term(parameter).

Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...

Rules:
You need to round the answer to 2 decimal places and return it as String.

If the given value is 0 then it should return 0.00

You will only be given Natural Numbers as arguments.

Examples:(Input --> Output)
1 --> 1 --> "1.00"
2 --> 1 + 1/4 --> "1.25"
5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"
*/

function SeriesSum(n) {
  let sum = 0  
  
  if (n === 1) {
     return n
  } 

  if (n === 2) {
     return 1.25
  }

  for (let i = 0; i < n; i++) {
     sum += 1 / (3 * i + 1)
  }

  return sum.toFixed(2)
}


// const SeriesSum = (n, acc = 0) => {
//   if (n === 0) return acc.toFixed(2)
//   else return SeriesSum(n - 1, acc + 1/(3 * n - 2))
// }

console.log(SeriesSum(5))