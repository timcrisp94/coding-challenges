/*

Given the root of a binary tree, invert the tree, and return its root.

Input: root = [4,2,7,1,3,6,9]
Output: [4,7,2,9,6,3,1]

  2       2
 / \     / \
1   3    3  1

divide
-if no root, null
conquer
-tree is new TreeNode
-tree = root
-recursive invert right and left
combine
-return tree

*/

const invertTree = function(root) {
  if (!root) return null
  const tree = new TreeNode()

  tree.val = root.val
  tree.left = root.left
  tree.right = root.right

  return tree
}