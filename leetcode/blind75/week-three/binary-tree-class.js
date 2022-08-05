class TreeNode {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }
  insert(value) {
    const newNode = new TreeNode(value)
    if (this.root === null) {
      this.root = newNode
      return this
    }
    const current = this.root
    while (true) {
      if (value === current.value) {
        return undefined
      }
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode
          return this
        }
        current = current.left
      } else {
        if (current.right === null) {
          current.right = newNode
          return this
        }
        current = current.right
      }
    }
  }
  find(value) {
    if (this.root === null) return false
    let current = this.root
    let found = false

    while (current && !found) {
      if (value < current.value) {
        current = current.left
      } else if (value > current.value) {
        current = current.right
      } else {
        return true
      }
    }
    return false
  }
  BFS() {
    let node = this.root
    let visited = []
    let queue = []
    queue.push(node)

    while (queue.length) {
      node = queue.shift()
      visited.push(node.value)
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    return visited
  }
  DFSPreorder() {
    let data = []
    function traverse(node) {
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
      data.push(node.value)      
    }
    traverse(this.root)
    return data
  }
  DFSPostOrder() {
    let data = []
    function traverse(node) {
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
      data.push(node.value)
    }
    traverse(this.root)
    return data
  }
  DFSInorder() {
    let data = []
    function traverse(node) {
      if (node.left) traverse(node.left)
      data.push(node.value)
      if (node.right) traverse(node.right)
    }
    traverse(this.root)
    return data
  }
  cloneGraph() {
    const visited = {}
    const dfs = (node) => {
      if (!node) return node
      if (visited[node.val]) {
        return visited[node.val]
      }
      let copy = new TreeNode(node.val)
      visited[node.val] = copy

      node.neighbors.forEach(n =>
        copy.neighbors.push(dfs(n))
      )
      return copy
    }
    return dfs(node)
  }
  invert (root) {
    if (!root) return null
    const tree = new TreeNode()

    tree.val = root.val
    tree.left = root.left
    tree.right = root.right
    
    return tree
  }
}

const tree = new BinarySearchTree()

console.log(tree.cloneGraph(4))