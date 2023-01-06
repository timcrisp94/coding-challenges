/* 226/23. INVERT BINARY TREE

Given the root of a binary tree, invert the tree, and return its root.

Example 1:

Input: root = [4,2,7,1,3,6,9]
Output: [4,7,2,9,6,3,1]
*/

const invertTree = (root) => {
  if (!root) return null
  return dfs(root)
}

const dfs = (root) => {
  const left = invertTree(root.left)
  const right = invertTree(root.right)

  root.left = right
  root.right = left

  return root
}