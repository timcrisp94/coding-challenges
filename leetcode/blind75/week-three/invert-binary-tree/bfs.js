/* 226/23. INVERT BINARY TREE

Given the root of a binary tree, invert the tree, and return its root.

Example 1:

Input: root = [4,2,7,1,3,6,9]
Output: [4,7,2,9,6,3,1]
*/


const invertTree = (root) => {
  if (!root) return null
  bfs([root])
  return root
}

const bfs = (queue) => {
  while (queue.length) {
    for (let i = queue.length - 1; 0 <= i; i--) {
      const node = queue.shift()
      const left = node.right
      const right = node.left

      node.left = left
      node.right = right

      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
  }
}