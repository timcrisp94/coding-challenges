/*
Let's build our understanding of tabulation by using the grid traveller problem

Picture a traveler on a grid, how many ways can they move (x, y)
gridTraveler(1, 1) -> return one because there's only one way
gridTraveler(2, 3) -> return three :
- right, right, down
- right, down, right
- down, right, right

the key is to visualize the problem as a table. The table should be related to the input size. Create a two-dimensional table to illustrate the grid, then initialize the values within the table. After initializing the default values, select a seed value.

  0  1  2 
0 0  0  0

1 0  1->1
     v  v
2 0  1  1

  0  1  2
0 0  0  0

1 0  1->1
       
2 0  1->2

time and space complexity O(kn)
*/

const gridStart = (k,n) => {
  const table = Array(k + 1)
  .fill() // make sure the elements are sub-arrays
  .map(() => Array(n + 1)) // map over, add indexes
  console.log(table)
}

console.log(gridStart(2, 3)) // an array with empty 4x3 sub-arrays

const gridSeed = (k,n) => {
  const table = Array(k + 1)
  .fill()
  .map(() => Array(n + 1).fill(0))
  console.log(table)
}

console.log(gridSeed(2, 3)) // same 4 x 3 with zeroes

const gridTraveler= (n, k) => {
  const table = Array(k + 1)
  .fill()
  .map(() => Array(n + 1).fill(0));
   
  table[1][1] = 1;
   
  for (let i = 0; i <= k; i++) {
    for (let j = 0; j <= n; j++) {
      const current=table[i][j];
      if (j + 1 <= n) { // increment to stay inside border
        table[i][j + 1] += current; // adds to the right
      }
      if (i + 1 <= k) { // increment to stay in border
        table[i + 1][j] += current; // adds down   
      }
    }
  }
  return table [k][n];
  
};

console.log(gridTraveler(2, 3))

// when solving a problem using tabulation, you must first envision it as a table / size the table based on the input, initialize with default values 
// identify the trivial answer (base case), iterate through the table then fill further parts based on the recent position