const reorderList = function(head) {
  if (!head) return null
  let slow = head
  let fast = head

  // find middle
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }

  // reverse second part of the list starting at slow
  let prev = null
  let curr = slow

  while (curr) {
    let next = curr.next
    curr.next = prev
    prev = curr
    curr = next    
  }

  // merge two sorted lists
  let first = head
  let second = prev

  while (second.next) {
    temp = first.next
    first.next = second
    first = temp

    temp = second.next
    second.next = first
    second = temp
  }
}