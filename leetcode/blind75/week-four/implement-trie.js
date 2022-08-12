class TrieNode {
  constructor() {
    this.children = {}
    this.isWord = false
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode()
  }
  insert(word, node = this.root) {    
    for (const char of word) {
      const child = node.children[char] || new TrieNode()
      node.children[char] = child
      node = child
    }
    node.isWord = true
  }  
  search(word, node = this.root) {
    for (const char of word) {
      const child = node.children[char] || null
      if (!child) return false
      node = child
    }
    return node.isWord
  }
  startsWith(prefix, node = this.root) {
    for (const char of prefix) {
      const child = node.children[char] || null
      if (!child) return false
      node = child
    }
    return true
  }
}

