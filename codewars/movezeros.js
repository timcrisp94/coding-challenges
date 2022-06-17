/*

Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

*/

// iterative solution

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
  return newArr.concat(zeros)
}

/*

filter method

const moveZeros = function(arr) {
  const filteredList = arr.filter(function(num) {
    return num !== 0
  })

  const zeroList = arr.filter(function(num) {
    return num === 0
  })

  return filteredList.concat(zeroList)
}

-or-

const moveZeros = function(arr) {
  return arr.filter((val) => val !== 0)
  .concat(arr.filter((val) => val === 0))
}

compact iterative solution

function moveZeros(arr) {
  const results = []
  const zeros = []

  for (let i in arr) {
    if (arr[i] === 0) {
      zeros.push(arr[i])
    } else {
      results.push(arr[i])
    }
  }
  return results.concat(zeros)
}

*/
