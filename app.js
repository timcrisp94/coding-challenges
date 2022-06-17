console.log('hi')

/*

Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

*/

console.log([ 9, 0, 9, 1, 2, 1, 1, 3, 1, 9, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0 ])

function moveZeros(arr) {
  const newArr = []
  const zeros = []

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zeros.push(arr[i])
    } else {
      newArr.push(arr[i])
    }
  }

  for (el of zeros) {
    newArr.push(el)
  }
  return newArr
}

console.log(moveZeros([ 9, 0, 9, 1, 2, 1, 1, 3, 1, 9, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0 ]))

// returns[false,1,1,2,1,3,"a",0,0]