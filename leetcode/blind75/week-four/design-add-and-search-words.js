// /**
//  * Initialize your data structure here.
//  */

//  var WordDictionary = function() {
//   this.trie = {}
// };

// /** 
// * @param {string} word
// * @return {void}
// */
// WordDictionary.prototype.addWord = function(word) {
//   let root = this.trie
//   for (let i = 0; i < word.length; i++) {
//       if (root[word[i]] == null) root[word[i]] = {}
//       root = root[word[i]]
//   }
//   root.isEnd = true
// };

// /** 
// * @param {string} word
// * @return {boolean}
// */
// WordDictionary.prototype.search = function(word) {
//   return this.dfs(word, 0, this.trie)
// };

// WordDictionary.prototype.dfs = function(word, index, node) {
//   if (index == word.length) return node.isEnd == true
  
//   if (word[index] == '.') {
//       for (let key in node) {
//           if (this.dfs(word, index + 1, node[key])) return true
//       }
//   } else {
//       if (node[word[index]] != null) {
//           return this.dfs(word, index + 1, node[word[index]])
//       }
//   }
//   return false
// }

/** 
* Your WordDictionary object will be instantiated and called as such:
* var obj = new WordDictionary()
* obj.addWord(word)
* var param_2 = obj.search(word)
*/


/** 
* Your WordDictionary object will be instantiated and called as such:
* var obj = new WordDictionary()
* obj.addWord(word)
* var param_2 = obj.search(word)
*/

class TrieNode {
  constructor() {
    this.children = {}
    this.isWord = false
  }
}

class WordDictionary {
  constructor() {
    this.root = new TrieNode()
  }
  addWord(word, node = this.root) {
    for (const char of word) {
      const child = node.children[char] || new TrieNode()
      node.children[char] = child
      node = child
    }
    node.isWord = true
  }
  search(word) {
    return this.dfs(word, this.root, 0)
  }
  dfs(word, node, level) {
    if (!node) return false
    const isWord = level === word.length
    if (isWord) return node.isWord

    const isWildCard = word[level] === '.'
    if (isWildCard) return this.hasWildCard(word, node, level)

    return this.dfs(word, node.children[word[level]], level + 1)
  }
  hasWildCard(word, node, level) {
    for (const char of Object.keys(node.children)) {
      const child = node.children[char]
      const hasWord = this.dfs(word, child, level + 1)
      if (hasWord) return true
    }
    return false
  }
}