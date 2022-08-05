/*

A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence at most once. Note that the path does not need to pass through the root.

The path sum of a path is the sum of the node's values in the path.

Given the root of a binary tree, return the maximum path sum of any non-empty path.

Input: root = [1,2,3]
Output: 6
Explanation: The optimal path is 2 -> 1 -> 3 with a path sum of 2 + 1 + 3 = 6.

Input: root = [-10,9,20,null,null,15,7]
Output: 42
Explanation: The optimal path is 15 -> 20 -> 7 with a path sum of 15 + 20 + 7 = 42.
*/

// var maxPathSum = function(root) {
//   let maxSum = Number.MIN_SAFE_INTEGER
  
//   function maxPath (node) {
//   if (!node) return 0
      
//   let leftPath = node.left ? Math.max(maxPath(node.left), 0) : 0
//   let rightPath = node.right ? Math.max(maxPath(node.right), 0) : 0
  
//   newPath = node.val + leftPath + rightPath
  
//   maxSum = Math.max(maxSum, newPath)
  
//     return node.val + Math.max(leftPath, rightPath)
//   }
// maxPath(root)
// return maxSum
// }

const maxPathSum = function(root) {
  let maxSum = Number.MIN_SAFE_INTEGER

  function maxPath(node) {
    if (!node) return 0

    let leftPath = node.left ? Math.max(maxPath(node.left), 0) : 0
    let rightPath = node.right ? Math.max(maxPath(node.right), 0) : 0
    
    maxSum = Math.max(maxSum, node.val + leftPath + rightPath)

    return node.val + Math.max(leftPath, rightPath)
  }

  maxPath(root)
  return maxSum
}