/*
Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.

A leaf is a node with no children.

*/

const hasPathSum = function(root, targetSum) {
  if (!root) return false
  let hasPath = false

  const dfs = (node, sum) => {
    if (node.left === null && node.right === null) {
      if (sum === node.val) {
        hasPath = true
      }
      return
    }
    if (node.left) {
      dfs(node.left, sum - node.val)
    }
    if (node.right) {
      dfs(node.right, sum - node.val)
    }
  }
  dfs(root, targetSum)
  return hasPath
}