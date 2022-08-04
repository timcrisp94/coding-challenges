/*

Serialization is the process of converting a data dataucture or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.

Ex: Input: root = [1,2,3,null,null,4,5]
Output: [1,2,3,null,null,4,5]

*/


const SPLITTER = 'X';
const NULL = 'NN';
var serialize = function(root) {
    let serial = "";

    function inorder(root){
        if(root == null){ 
            serial += NULL + SPLITTER;
            return;
        }
        serial += root.val + SPLITTER;
        inorder(root.left);
        inorder(root.right);   
    }

    inorder(root);
    return serial;
};
/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    data = data.split('X');
    let idx = 0;
    
    function buildTree(data){
        if(idx >= data.length) return null;
        if(data[idx] == NULL) {
          idx++ 
          return null
        }
        let node = new TreeNode(parseInt(data[idx++]));
        node.left = buildTree(data);
        node.right = buildTree(data);
        return node;
    }

    return buildTree(data);
};
