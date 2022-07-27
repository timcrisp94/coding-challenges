// Given the head of a singly linked list where elements are sorted in ascending order, convert it to a height balanced BST.

// For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

// brute force pseudocode
// - convert linked list to an array
// - define recursive helper to build a treee from the middle node, recursively calling itself to build subtrees on the left and right of the middle node

// pseudo
// define curr = head as global variable
// - iterate through linked list, counting 
// - define recursive helper using indexes as arguments

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

// const sortedListToBST = function(head) {
//   let curr = head, count = 0

//   while (curr) curr = curr.next, count++
//   const binaryTree = (i, j) => {
//     if (j < i) return null
//     let mid = i + j >> 1
//     node = new TreeNode()
//     node.val = curr.val
//     curr = curr.next
//     node.left = binaryTree(i, mid - 1)
//     node.right = binaryTree(mid + 1, j)
//     return node
//   }
//   curr = head
//   return binaryTree(1, count)
// }

console.log(sortedListToBST([-10,-3,0,5,9]))

const sortedListToBST = function(head) {
  const helperFunction = function(head, foot) {
    let fast = head
    let slow = head
    let node
    
    if (head === foot) return null

    while (fast !== foot && fast.next !== foot) {
      fast = fast.next.next
      slow = slow.next
    }
    
    node = new TreeNode(slow.val)
    node.left = helperFunction(head, slow)
    node.right = helperFunction(slow.next, foot)
    
    return node
  }
  return helperFunction(head, null)
}

const sortedListtoBST = function(head) {
  const helperFunction = function(head, foot) {
    let fast = head
    let slow = head
    let node

    if (head === foot) return null

    while (fast !== foot && fast.next !== foor) {
      fast = fast.next.next
      slow = slow.next
    }

    node = new TreeNode(slow.val)
    node.left = sortedListtoBST(head, slow)
    node.right = sortedListtoBST(slow.next, foot)
    return node
  }
  return helperFunction(head, null)
}