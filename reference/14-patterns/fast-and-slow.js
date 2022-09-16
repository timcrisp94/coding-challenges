// Fast & Slow Pointers

// Ways to identify
// loop in a linked list or array
// when you need to know the position of a certain element or the overall length of a linked list

// Example problems
// linked list cycle

const hasCycle = (head) => {
  let slow = head
  let fast = head

  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow.next

    if (slow === fast) return true
  }
  return false
}

