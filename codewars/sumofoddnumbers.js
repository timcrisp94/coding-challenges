/*
Given the triangle of consecutive odd numbers:

Given the triangle of consecutive odd numbers:

             1 = 1
          3     5 = 8 
       7     9    11 = 27
   13    15    17    19 = 64 4
21    23    25    27    29
...

row n is equal to number of values
first value equal to 1 + 2 + 4 + 6
*/

function rowSumOddNumbers(n) {
	return n ** 2 * n

}

console.log(rowSumOddNumbers(4))

/*


*/
