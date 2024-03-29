/*

Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.

Input: root = [3,1,4,null,2], k = 1
Output: 1

  3
 / \
1   4
 \
  2

*/

const kthSmallest = function(root, k) {
  let temp = root
  let count = 1
  let val

  function inOrder(temp) {
    if (!temp) return null
    inOrder(temp.left)

    if (count === k) val = temp.val

    count++
    inOrder(temp.right)
  }
  inOrder(temp)
  return val
}

function kthAlt(root, k) {
  let n = 0
  const stack = []
  let cur = root

  while (cur || stack) {
    while (cur) {
      stack.push(cur)
      cur = cur.left
    }
    cur = stack.pop()
    n += 1
    
    if (n === k) return cur.val
  }
  cur = cur?.right
}