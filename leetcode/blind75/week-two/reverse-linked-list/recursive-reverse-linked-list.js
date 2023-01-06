/*
206/12. REVERSE LINKED LIST
* recursive *

Given the head of a singly linked list, 
reverse the list, and return the reversed list.

Example : 
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]

in:  (1)->(2)->(3)->(4)->(5)
out: (5)->(4)->(3)->(2)->(1)

- pseudo -
BC IF head === null OR head.next === null
  return head
let reversedListHead = reverseList(head.next)
head.next.next = head
head.next = null
return reversedListHead
*/

const reverseList = function(head) {
  if (head === null || head.next === null) {
    return head
  }

  let reversedListHead = reverseList(head.next)
  head.next.next = head
  head.next = null
  return reversedListHead
}  

console.log(reverseList([1,2,3,4,5]))