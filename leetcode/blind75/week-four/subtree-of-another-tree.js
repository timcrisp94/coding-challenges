/*

Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.

Input: root = [3,4,5,1,2], subRoot = [4,1,2]
Output: true

   3       4
  / \     / \
 4   5   1   2
/ \
1  2
*/

const isSubtree = function(s, t) {
  if (!s) return !t
  return isEqual(s, t) || isSubtree(s.left, t) || isSubtree(s.right, t)
}

function isEqual(root1, root2) {
  if (!root1 || !root2) return !root1 && !root2
  if (root1.val !== root2.val) return false
  return isEqual(root1.left, root2.left) && isEqual(root1.right, root2.right)
}