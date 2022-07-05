/*
Write a function that accepts a positive integer n. The function should console log a step shape with N levels using the # character. Make sure the step has spaces onf the right hand side.
*/



function pyramid(n) {
  const midpoint = Math.floor((2 * n - 1) / 2)
  
  for (let row = 0; row < n; row++) {
    let level = ''

    for (let column = 0; column < 2 * n - 1; column++) {
      if (midpoint - row <= column && midpoint + row >= column) {
        level += '#'
      } else {
        level += ' '
      }
    }
    console.log(level)
  }
}

pyramid(3)

/*
/ iterative solution

/ from 0 to n (iterate through rows)
  / create an empty string 'level'
  / from 0 to ?? (columns) --> n * 2 -1
    / if the column should have a '#' --> column midpoint : Math.floor(n * 2 - 1 / 2) +/- by row
      / add a '#' to 'level'
    / else
      / add a space to level
  console.log 'stair'

function pyramid(n) {
  const midpoint = Math.floor((2 * n - 1) / 2)
  
  for (let row = 0; row < n; row++) {
    let level = ''

    for (let column = 0; column < 2 * n - 1; column++) {
      if (midpoint - row <= column && midpoint + row >= column) {
        level += '#'
      } else {
        level += ' '
      }
    }
    console.log(level)
  }
}

/ recursive solution


function pyramid(n, row = 0, level = '') {
  if (row === n) {
    return
  }

  if (level.length === 2 * n - 1) {
    console.log(level)
    return pyramid(n, row + 1)
  }

  const midpoint = Math.floor((2 * n - 1) / 2)
  let add;
  if (midpoint - row <= level.length && midpoint + row >= level.length) {
    add = '#'
  } else {
    add = ' '
  }
  
  pyramid(n, row, level + add)
}

*/