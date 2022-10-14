/* 19/19. REMOVE NTH NODE FROM END OF LIST

Given the head of a linked list, remove the nth node from the end of the list and return its head.

Example 1:
Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]

- pseudo -
let dummy = new Node(-Infinity)
dummy.next = head
let prev = dummy
let result = dummy
let left = head
let right = head
WHILE n > 0
  right = right.next
  n -= 1
WHILE right
  left = left.next
  right = right.next
  prev = prev.next
prev.next = left.next
return result = result.next
*/

const removeNthFromEnd = function(head, n) {
  let dummy = new Node(-Infinity)
  dummy.next = head
  let prev = dummy
  let resultHead = dummy
  let left = head
  let right = head
  
  while (n > 0) {
    right = right.next
    n -= 1
  }

  while (right) {
    right = right.next
    left = left.next
    prev = prev.next
  }

  prev.next = left.next
  return resultHead.next
}