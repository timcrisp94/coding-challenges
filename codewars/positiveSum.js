
/*
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.
*/

function positiveSum(arr) {
  const plusArr = [0]
  let sum = 0

  for (let num of arr) {
     if (num >= 0) {
        plusArr.push(num)
     }
  }

  for (let num of plusArr) {
     sum += num
  }

  return sum
}

console.log(positiveSum([1, -4, 7, 12]))