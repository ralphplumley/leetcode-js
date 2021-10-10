var Trie = function() {
    this.root = {}
};

Trie.prototype.insert = function(word) {
    let node = this.root
    for (let char of word) {
        if (!node[char]) node[char] = {}
        node = node[char]
    }

    node['word'] = word // store word too, in this trie
    node['isEnd'] = true
};

Trie.prototype.search = function(word) {
    let node = this.root
    for (let char of word) {
        if (!node[char]) return false
        node = node[char]
    }

    return node['isEnd'] === true
};

Trie.prototype.startsWith = function(prefix) {

    let node = this.root
    for (let char of prefix) {
        if (!node[char]) return false
        node = node[char]
    }

    return true
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

var findWords = function(board, words) {

    // build the trie
    const trie = new Trie()
    for (word of words) {
        trie.insert(word)
    }

    const output = [],
        ROWS = board.length,
        COLS = board[0].length,
        DIRS = [
            [0, 1],
            [1, 0],
            [0, -1],
            [-1, 0],
        ]

    const backtrack = (row, col, node) => {
        const char = board[row][col]

        if (node[char].hasOwnProperty('isEnd')) {
            output.push(node[char].word)
            delete node[char].isEnd
            delete node[char].word
        }

        // mark the current letter before exploration
        board[row][col] = '#'

        for (let dir of DIRS) {
            const newRow = row + dir[0],
                  newCol = col + dir[1]

            // check boundaries
            if (newRow < 0 || newRow === ROWS || newCol < 0 || newCol === COLS) continue
            // if (node.startsWith(board[newRow][newCol])) {
            if (node[char].hasOwnProperty(board[newRow][newCol])) {
                backtrack(newRow, newCol, node[char])
            }
        }

        // end exploration, restore original letter in the board
        board[row][col] = char
    }

    for (let row = 0; row < ROWS; ++row) {
        for (let col = 0; col < COLS; ++col) {
            const char = board[row][col]

            if (trie.startsWith(char)) {
                backtrack(row, col, trie.root)
            }
        }
    }

    return output

};

const board = [["o","a","b","n"],["o","t","a","e"],["a","h","k","r"],["a","f","l","v"]]
const words = ["oa","oaa"]
console.log(findWords(board, words))
