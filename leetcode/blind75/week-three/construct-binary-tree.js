/* 105/26. CONSTRUCT BINARY TREE from PREORDER and INORDER TRAVERSAL

Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.

EX: Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
Output: [3,9,20,null,null,15,7]

pseudo : 
- preorder[0] = root
- inorder vals to left of root = left subtree
-- vals to right = right subtree

*/

const buildTree = function(preorder, inorder) {
  if (!preorder.length || !inorder.length) return null

  let root = new TreeNode(preorder[0])
  let mid = inorder.indexOf(root.val)

  root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid))
  root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1))

  return root
}