/*

Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.

Ex: 
Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
Output: 6

    6
   / \
  2   8
 / \ / \
 0 4 7 9
   /\
  3  5

*/

// iterative
const lowestCommonAncestor = function(root, p, q) {
  while (root) {
    if (root.val < p.val && root.val < q.val) {
      root = root.right
    } else if (root.val > p.val && root.val > q.val) {
      root = root.left
    } else {
      break
    }
  }
  return root
}

// recursive
const lCAI = function(root, p, q) {
  if (root.val < p.val && root.val < q.val) {
    return lCAI(root.right, p, q)
  } 
  if (root.val > p.val && root.val > q.val) {
    return lCAI(root.left, p, q)
  } 
  return root
}