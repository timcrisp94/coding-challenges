/*
Write a function that accepts a positive integer n. The function should console log a step shape with N levels using the # character. Make sure the step has spaces onf the right hand side.
*/



function steps(n) {
  for (let row = 0; row < n; row++) {
    let stair = ''

    for (let column = 0; column < n; column++) {
      column <= row ? stair += '#' : stair += ' '
    }
    console.log(stair)
  }
}

(steps(3))

/*
/ iterative solution

/ from 0 to n
  / create an empty string 'stair'
  / from 0 to n
    / if current column is equal to or less than the current row
      / add a '#' to 'stair'
    else 
      / add a space to 'stair'
    console.log 'stair'

function (steps(n)) {
  for (let row = 0; row < n; row++) {
    let stair = ''

    for (let column = 0; column < n; column++) {
      if (column <= row) {
        stair += '#'
      } else {
        stair += ' '
      }
    }
    console.log(stair)
  }
}


/ recursive solution
function steps(n, row = 0, stair = '') {
  if (n === row) {
    return
  }

  if (n === stair.length) {
    console.log(stair)
    return steps(n, row + 1)
  }

  const add = stair.length <= row ? '#' : ' '
  steps(n, row, stair + add)

}

*/