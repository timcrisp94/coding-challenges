/*
141/13. 141. Linked List Cycle

Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

- pseudo - 
*slow and fast pointers
slow = head
fast = head
WHILE fast and fast.next
  fast = fast.next.next
  slow = slow.next
  IF slow === fast return true
return false
*/

// const hasCycle = function(head) {
//   let slow = head
//   let fast = head

//   while (fast && fast.next) {
//     fast = fast.next.next
//     slow = slow.next

//     if (fast === slow) return true
//   }
//   return false
// }

const hasCycle = function(head) {
  const hash = {}

  while (head) {
    if (dictionary.has(head)) return true

    hash[head] = head
    head = head.next
  }

  return false
}