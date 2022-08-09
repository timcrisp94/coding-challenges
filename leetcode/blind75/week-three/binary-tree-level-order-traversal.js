/*

Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

- when we read the directions we see that this is a bradth first search

Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]

divide
-node = this.root
-visited = []
-queue(node)
conquer
-while queue
  -node shift, push node value visited
  -if left, queue left; right
combine
-return visited

divide
conquer
combine

*/

const levelOrder = function(root) {
  if (!root) return []
  const visited = []
  const queue = [root]  

  while (queue.length) {
    let len = queue.length
    visited.push(queue.map(node => node.val))
    
    while (len--) {
      let node = queue.shift()
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
  }  
  return visited
}
