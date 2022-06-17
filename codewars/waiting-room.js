/*
There's a waiting room with N chairs set in single row. Chairs are consecutively numbered from 1 to N. First is closest to the entrance (which is exit as well).

For some reason people choose a chair in the following way

Find a place as far from other people as possible
Find a place as close to exit as possible
All chairs must be occupied before the first person will be served

So it looks like this for 10 chairs and 10 patients
Chairs	  [X	2	3	4	5]	[6	7	8	9	 X]
Patients	[1	7	5	8	3]  [9	4	6	10	2]




your task is to find last patient's chair's number

Input: number of chairs N, an integer greater than 2.
Output: a positive integer, the last patient's chair number.

*/

// n chairs
// as far as possible
// as close to the exit as possible

// left, right, center -> 1 , 10, 5
// center, left, right -> 7, 3, 8 
// right, center, left -> 2, 4, 6
// [
//   1, 10, 5, 
//   7, 3, 8,
//   2, 4, 6, 
//   9
// ]

// 1, 3, 2
// 1, 3, 4, 2
// 1, 4, 3, 5, 2
// 1, 4, 3, 5, 6, 2


function lastChair(N){
  return N - 1
}

console.log(lastChair(10))