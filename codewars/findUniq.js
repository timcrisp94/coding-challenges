/*

There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

*/

function findUniq(arr) {
  return arr.filter(function(elem) {
    return arr.indexOf(elem) === arr.lastIndexOf(elem)
  })[0]
}


console.log(findUniq([ 0, 0, 1, 0]))

/*

function findUniq(arr) {
  arr.sort((a,b) => a - b)
  return arr[0] == arr[1] ? arr.pop() : arr[0]
}

*/