// const removeNthNodeFromEnd = function(head, n) {
//   let dummy = new ListNode(-Infinity)
//   dummy.next = head
//   let resultHead = dummy  
//   let tail = head

//   while (n > 0) {
//     tail = tail.next
//     n--
//   }

//   let removedNode = head
//   let prev = dummy

//   while (tail) {
//     tail = tail.next
//     removedNode = removedNode.next
//     prev = prev.next
//   }

//   prev.next = removedNode.next
//   return resultHead.next
// }

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