/*
Given a reference of a node in a connected undirected graph.

Return a deep copy (clone) of the graph.

Each node in the graph contains a value (int) and a list (List[Node]) of its neighbors.

class Node {
    public int val;
    public List<Node> neighbors;
}

Test case format:

For simplicity, each node's value is the same as the node's index (1-indexed). For example, the first node with val == 1, the second node with val == 2, and so on. The graph is represented in the test case using an adjacency list.

An adjacency list is a collection of unordered lists used to represent a finite graph. Each list describes the set of neighbors of a node in the graph.

The given node will always be the first node with val = 1. You must return the copy of the given node as a reference to the cloned graph.

Example: 
Input: adjList = [[2,4],[1,3],[2,4],[1,3]]
                    1     2     3     4
Output: [[2,4],[1,3],[2,4],[1,3]]
Explanation: There are 4 nodes in the graph.
1st node (val = 1)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).
2nd node (val = 2)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).
3rd node (val = 3)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).
4th node (val = 4)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).
*/

// each node is the value of the index + 1
// adjacency list = [vertex1, vertex 2]
// depth first search
// - store visited as an object
// return values of object as an array

function Node(val, neighbors) {
  this.val = val === undefined ? 0 : val;
  this.neighbors = neighbors === undefined ? [] : neighbors;
};

class Node {
  constructor(value){
      this.val = val === undefined ? 0 : val
      this.neighbors = neighbors === undefined ? [] : neighbors      
  }
}

var cloneGraph = function(node) {
  // Nodes we have already copied
  const visited = {};

  // DFS function to copy graph
  const dfs = (node) => {
      if (!node) return node;
      // If we have seen this node before, return it
      if (visited[node.val]) return visited[node.val];

      // Create base for copied node
      let copy = new Node(node.val);
      // Add this copied node to group of nodes we hav copied
      visited[node.val] = copy;

      // Add copied neighbors to the current copied node
      node.neighbors.forEach(n => copy.neighbors.push(dfs(n)))
      return copy;
  }

  // Return new copied graph
  return dfs(node);
};

console.log(cloneGraph([[2,4],[1,3],[2,4],[1,3]]))