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
*/

const findWords = function(board, words) {
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


const findWordsTwo = (board, words) => {
  const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];
  let res = [];

  const buildTrie = () => {
    const root = {};
    for (const w of words) {
      let node = root;
      for (const c of w) {
        if (node[c] == null) node[c] = {};
        node = node[c];
      }
      node.word = w;
    }
    return root;
  };

  const search = (node, x, y) => {
    if (node.word != null) {
      res.push(node.word);
      node.word = null; // make sure only print one time for each word
    }

    if (x < 0 || x >= board.length || y < 0 || y >= board[0].length) return;
    if (node[board[x][y]] == null) return;

    const c = board[x][y];
    board[x][y] = '#'; // Mark visited
    for (const [dx, dy] of dirs) {
      const i = x + dx;
      const j = y + dy;
      search(node[c], i, j);
    }
    board[x][y] = c; // Reset
  };

  const root = buildTrie();
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      search(root, i, j);
    }
  }
  return res;
};

console.log(findWordsTwo([ ["o","a","a","n"],
["e","t","a","e"],
["i","h","k","r"],
["i","f","l","v"]], 
["oath","pea","eat","rain"]))