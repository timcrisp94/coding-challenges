/*
Given the head of a singly linked list, reverse the list, and return the reversed list.

Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
*/
/* 
1 -> 2 -> 3 -> 4 -> 5
5 -> 4 -> 3 -> 2 -> 1

the best solution is to move through the list and reverse the arrows, moving the head to the end like this:

1 <- 2 <- 3 <- 4 <- 5

1. define current and previous
let current = head
let prev = null

/ while loop
while (cur)
2. save next
let holdNext = cur.next
3. reverse pointer
cur.next = prev
4. move previous
prev = cur
5. move cur
cur = holdNext

return prev

*/
var reverseList = function(head) {
  let cur = head
  let prev = null

  while (cur) {
    let holdNext = cur.next
    cur.next = prev
    prev = cur
    cur = holdNext
  }
  return prev
};

console.log(reverseList([1, 2, 3, 4, 5]))