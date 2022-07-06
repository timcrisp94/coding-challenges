/*
https://www.youtube.com/watch?v=XKu_SEDAykw&ab_channel=LifeatGoogle

Given a collection of numbers, find a matching pair that is equal to the given sum

Example:
[1, 2, 3, 9]; sum = 8
[1, 2, 4, 4]; sum = 8

Clarification questions
- state the problem
- in the first sample, there is no pair
- how are these numbers given, in an array, in memory?
- what about repeating elements? 
- these numbers, can i assume that they are integers?

Talking through 
- the simplest way would be to iterate, but that would not be efficient (quadratic)
- if the numbers are sorted i could use binary search, which is log algorithim in a sorted list (still a little slow)
- identify the range, work up from the lowest point, down from the highest point which is linear (example 2: 1 + 4 = 5, 2 + 4 = 6, 4 + 4 = 8)

Do we return the pair or a boolean value?

Whiteboard

function hasPairWithSum(arr, sum) {
  int low = 0
  int high = array.length - 1

  while (low < high) {
    if arr[i] + int high = sum
    return true
  }
}
*/

function hasPairWithSum(arr, sum) {
  let intLow = 0
  let intHigh = arr[arr.length - 1]
  
  while (intLow < intHigh) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] + intHigh === sum) {
        return true
      }
    }
  }

}

console.log(hasPairWithSum([1, 2, 4, 4], 8))

/*

A WRENCH HAS BEEN THROWN -- "I CAN NO LONGER GURANTEE THAT THE NUMBERS ARE SORTED; YOU HAVE TO THINK OF A DIFFERENT SOLUTION"

Talking through
- If I sort it would still be an n log(n) solution [we want faster]

- If we go back to this idea that we have a number, does its compliment exist? can we store the compliment? what's a good data structure for data look-up? a hash table is constant time, but we don't need keys? a hash set! 

- With a hash set we need to be careful of compliments that are the same as the value (i.e. 4)

- we can use a hash set to look back

function hasPairWithSum2
/ current element + something we have seen equals some


NOTES
- ask for clarification
- constantly think out loud
- think through everything before writing
- test! test in real time! think of edge cases 
*/