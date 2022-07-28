// Given the head of a singly linked list, reverse the list, and return the reversed list.

// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]


const reverseList = function(head) {
  let curr = head
  let prev = null

  while (curr) {
    let holdNext = curr.next
    curr.next = prev
    prev = curr
    curr = holdNext
  }
  return prev
}

console.log(reverseList([1,2,3,4,5]))