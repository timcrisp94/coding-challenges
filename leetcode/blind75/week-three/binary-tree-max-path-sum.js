/*
Given the root of a binary tree, return the maximum path sum of any non-empty path.

Input: root = [1,2,3]
Output: 6
Explanation: The optimal path is 2 -> 1 -> 3 with a path sum of 2 + 1 + 3 = 6.

Input: root = [-10,9,20,null,null,15,7]
Output: 42
Explanation: The optimal path is 15 -> 20 -> 7 with a path sum of 15 + 20 + 7 = 42.
*/

const maxPathSum = function(root) {
  let maxSum = Number.MIN_SAFE_INTEGER
  function maxPath(node) {
    if (!node) return 0
    let left = Math.max(maxPath(node.left))
    let right = Math.max(node.right)

    maxSum = Math.max(maxSum, node.val + left + right)
    return node.val + Math.max(left, right)
  }
  maxSum(root)
  return maxSum
}