/*
write a function that accepts an integer n and returns an nxn spiral matrix

matrix(3)
[[1, 2, 3],
 [8, 9, 4],
 [7, 6, 5]]

clarify: so we are returning an array of arrays
- there will be n arrays with a length of n

first we'll define a variable results = []

we'll use a for loop to add n sub-arrays to the results array

while startRow <= endRow && startColumn <= endColumn
we'll use a counter variable to iterate through our top array, then through the end column (n - 1 index of each array), then our bottom array, then the start column (0 index)

variables:
counter = 1
startRow = 0
endRow = n - 1
endColumn = n - 1
startColumn = 0
*/

function matrix(n) {
  let results = []

  for (let i = 0; i < n; i++) {
    results.push([])
  }

  let counter = 1
  let startRow = 0
  let endRow = n - 1
  let endColumn = n - 1
  let startColumn = 0

  while (startRow <= endRow && startColumn <= endColumn) {

    // start row
    for (let i = startColumn; i <= endColumn; i++) {
      results[startRow][i] = counter;
      counter++
    }
    startRow++

    // end column
    for (let i = startRow; i <= endRow; i++) {
      results[i][endColumn] = counter
      counter++
    }
    endColumn--

    // end row
    for (let i = endColumn; i >= startColumn; i--) {
      results[endRow][i] = counter
      counter++
    }
    endRow--

    // start column
    for (let i = endRow; i >= startRow; i--) {
      results[i][startColumn] = counter
      counter++
    }
    startColumn++
  }
  return results
}

console.log(matrix(3))
