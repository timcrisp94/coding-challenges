/*

There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return True if you're better, else False!

Note:
Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

*/

function betterThanAverage(classPoints, yourPoints) {
  return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length
  
}




console.log(betterThanAverage([2, 3], 5))
console.log(betterThanAverage([5, 5], 4))

/*

/ helper function
function betterThanAverage(classPoints, yourPoints) {
  return average(classPoints) < yourPoints
  
}

function average(array) {
  let addedScores = 0
  for (let num of array) {
    addedScores += num
  }
  return addedScores/array.length
}



*/