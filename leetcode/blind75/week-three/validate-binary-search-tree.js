/* 98/23. VALIDATE BINARY SEARCH TREE

Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.

Input: root = [2,1,3]
Output: true

Input: root = [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.

  5
 / \
 1  4
   / \
  3   6

divide
-if no root
-left & right
-min & max 
conquer
-recursive validate
-if min > val > max, false
-validate left & right
combine
return is valid(validate), true
*/

var isValidBST = function(root) {
  if (!root) return true
  return validate(root, null, null)    
};

function validate(node, min, max) {
  if (min !== null && node.val <= min) return false
  if (max !== null && node.val >= max) return false
  
  if (node.left && !validate(node.left, min, node.val)) return false
  if (node.right && !validate(node.right, node.val, max)) return false
  
  return true
}