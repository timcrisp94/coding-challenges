/*

Given an m x n board of characters and a list of strings words, return all words on the board.

Each word must be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.

Example
Input: board = 
[["o","a","a","n"],
 ["e","t","a","e"],
 ["i","h","k","r"],
 ["i","f","l","v"]], 
words = ["oath","pea","eat","rain"]

[["O","A","a","n"],
 ["e","T","A","E"],
 ["i","H","k","r"],
 ["i","f","l","v"]], 

Output: ["eat","oath"]

psuedo - backtracking trie
const findWords = function(board, words)
  let n = board.length
  let m = board[0].length
  const dirs = [directions]
  let result = []

  build Trie
    root = hashMap
    iterate word of words
      let node = root
      iterate char of word
        if no node[c], node[c] = hashMap
          node = node[c]
      node.word = w
    return root

  dfs search (root, x, y)
    if's : node.word not null, push node.word to result, node.word = null (to print once)
      out of bounds return
      node does not have cuurrent char return
    c = board[x][y]
    mark as visited: board[x][y] = "#"
    for (const [dx, dy] of directions)
      i = x + dx
      j = y + dy
      search(node[c], i,  j)
    reset board[x][y]
  root = buildTrie()
  for let i = 0 up to n
    for let j = 0 up to m
      search(root, i, j)
  return result
*/    
const findWords = (board, words) => {
  const n = board.length
  const m = board[0].length
  const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];
  let result = [];

  const buildTrie = () => {
    const root = {};
    for (const w of words) {
      let node = root;
      for (const c of w) {
        if (!node[c]) node[c] = {};
        node = node[c];
      }
      node.word = w;
    }
    return root;
  };

  const search = (node, x, y) => {
    if (node.word != null) {
      result.push(node.word);
      node.word = null; // make sure only print one time for each word
    }
    
    if (x < 0 || x >= n || y < 0 || y >= m) return;
    if (node[board[x][y]] == null) return;

    const c = board[x][y];
    board[x][y] = '#'; // Mark visited
    for (const [dx, dy] of dirs) {
      const i = x + dx;
      const j = y + dy;
      search(node[c], i, j);
    }
    board[x][y] = c; // reset
  };

  const root = buildTrie();
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      search(root, i, j);
    }
  }
  return result;
};

// using Trie class
const findWordsTwo = function(board, words) {
  return new Trie(words).searchBoard(board)
}

class TrieNode {
  constructor() {
    this.children = {}
    this.word = ''
  }
}

class Trie {
  constructor(words) {
    this.root = new TrieNode()
    words.forEach((word) => this.insert(word))
  }
  insert(word, node = this.root) {
    for (const char of word) {
      const child = node.children[char] || new TrieNode()
      node.children[char] = child
      node = child
    }
    node.word = word
  }
  searchBoard(board, node = this.root, words = []) {
    const [rows, cols] = [board.length, board[0].length]
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        this.dfs(board, row, rows, col, cols, node, words)
      }
    }
    return words
  }
  dfs(board, row, rows, col, cols, node, words) {
    const char = board[row][cols]
    const child = node.children[char] || null

    if (this.canSkip(char, child)) return
    node = child
    this.checkWord(node, words)
    this.backTrack(board, row, rows, col, cols, node, words)
  }
  canSkip(char, child) {
    const hasSeen = char === '#'
    const isMissingChild = !child
    return hasSeen || isMissingChild
  }
  checkWord(node, words) {
    if (!node.word.length) return
    words.push(node.word)
    node.word = ''
  }
  backTrack(board, row, rows, col, cols, node, words) {
    const char = board[row][col]
    board[row][col] = '#'
    for (const [_row, _col] of this.getNeighbors(row, rows, col, cols)) {
      this.dfs(board, _row, rows, _col, cols, node, words) 
    }
    board[row][col] = char
  }
  getNeighbors(row, rows, col, cols) {
    return [
      [row - 1, col],
      [row + 1, col],
      [row, col - 1],
      [row, col + 1]
    ].filter(([_row, _col]) => !this.isOutOfBounds(_row, rows, _col, cols))
  }
  isOutOfBounds(row, rows, col, cols) {
    const isRowOut = row < 0 || rows <= row
    const isColOut = col < 0 || cols <= col
    return isRowOut || isColOut
  }
}

console.log(findWords([ ["o","a","a","n"],
["e","t","a","e"],
["i","h","k","r"],
["i","f","l","v"]], 
["oath","pea","eat","rain"]))





console.log(findWordsTwo([ ["o","a","a","n"],
["e","t","a","e"],
["i","h","k","r"],
["i","f","l","v"]], 
["oath","pea","eat","rain"]))

const buildTrie = (words) => {
  const root = {}
  for (const w of words) {
    let node = root
    for (let c of w) {
      if (!node[c]) node[c] = {}
      node = node[c]
    }
    node.word = w   
  }
  return root
}

console.log(buildTrie(["ace", "ape", "app"]))