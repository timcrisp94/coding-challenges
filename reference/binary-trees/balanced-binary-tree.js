/*

Given a binary tree, determine if it is height-balanced.

For this problem, a height-balanced binary tree is defined as:

a binary tree in which the left and right subtrees of every node differ in height by no more than 1.

divide
-if root is null, true
-balanced = true
conquer
-dfs(node)
  -if no left and right, false
  -count and dfs left and right
combine
  -let height equal larger left or right
  -if absolute(left - right > 1), false
  -return height
-dfs(root)
-return balanced

*/

const isBalanced = function(root) {
  if (root === null) return true
  let balanced = true

  function dfs(root) {
    if (root.left === null && root.left === null) return 0
    let left = 0
    let right = 0

    if (root.left !== null) {
      left = 1 + dfs(root.left)
    }

    if (root.right !== null) {
      right = 1 + dfs(root.left)
    }

    let height = Math.max(left, right)
    if (Math.abs(left - right) > 1) balanced = false
    return height
  }
  dfs(root)
  return balanced
}