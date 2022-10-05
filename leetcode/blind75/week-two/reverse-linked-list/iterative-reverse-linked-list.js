/*
206/12. REVERSE LINKED LIST

Given the head of a singly linked list, 
reverse the list, and return the reversed list.

Example : 
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]

in:  (1)->(2)->(3)->(4)->(5)
out: (5)->(4)->(3)->(2)->(1)

- pseudo -
let cur = head
let prev = null
WHILE cur
  let hold = cur.next
  cur.next = prev
  prev = cur
  cur = hold
return prev
*/

const reverseList = function(head) {
  let cur = head
  let prev = null

  while (cur) {
    let temp = cur.next
    cur.next = prev
    prev = cur
    cur = temp
  }
  return prev
}

console.log(reverseList([1,2,3,4,5]))