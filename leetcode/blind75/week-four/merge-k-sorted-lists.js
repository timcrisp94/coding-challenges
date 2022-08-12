/*

You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

Merge all the linked-lists into one sorted linked-list and return it.

Input : Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]

*/

// merge lists two at a time
// merge until only one list left

var mergeKLists = function(lists) {
  if (lists.length === 0) return null

  while (lists.length > 1) {
    let a = lists.shift()
    let b = lists.shift()
    let mergedAB = mergeLists(a, b)
    lists.push(mergedAB)
  }
  return lists[0]
};

const mergeLists = function(a, b) {
  let dummy = new ListNode(0)
  let current = dummy

  while (a !== null && b !== null) {
    if (a.val < b.val) {
      current.next = a
      a = a.next
    } else {
      current.next = b
      b = b.next
    }
    current = current.next
  }
  current.next = a || b
  return dummy.next
}

console.log(mergeKLists([[1,4,5],[1,3,4],[2,6]]))


// MERGE TWO LISTS

const mergeTwoLists = function(l1, l2) {
  let dummy = new ListNode(0)
  let current = dummy

  while (l1 && l2) {
    if (l1.val < l2.val) {
      current.next = l1      
      l1 = l1.next
    } else {
      current.next = l2      
      l2 = l2.next
    }
    current = current.next
  }
  current.next = l1 || l2
  return dummy.next
}

// MERGE TWO LISTS RECURSIVE

const mergeTwoListsRecursive = function(l1, l2) {
  if (!l1 || !l2) return (l1 ? l1 : l2)
  if (l1.val < l2.val) {
    l1.next = mergeTwoListsRecursive(l1.next, l2)
    return l1
  } else {
    l2.next = mergeTwoListsRecursive(l1, l2.next)
    return l2
  }
}