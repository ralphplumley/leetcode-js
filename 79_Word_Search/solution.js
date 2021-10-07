/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

/*
    T.C.:  O(N*(3^L))
        rows x cols = N cells on the board
        L = length of word. We check 3 directions in each back track call,
            so 3^L

    S.C.:  O(L)
        the maximum length of the call stack would be the word length
 */
var exist = function(board, word) {
    const ROWS = board.length,
        COLS = board[0].length,
        DIRS = [
            [0,1],
            [1,0],
            [0,-1],
            [-1,0]
        ]

    const backtrack = (row, col, word, index) => {
        // step 1) base case
        if (index >= word.length) return true

        // step 2) check the boundaries
        if (row < 0 || row === ROWS || col < 0 || col === COLS || board[row][col] !== word.charAt(index)) return false

        // step 3) explore the neighbors in DFS
        let ret = false

        // mark the path before the next exploration
        board[row][col] = '#'

        for (let dir of DIRS) {
            ret = backtrack(row + dir[0], col + dir[1], word, index + 1)
            if (ret) break
        }

        // step 4) clean up and return the result
        board[row][col] = word.charAt(index)
        return ret
    }

    for (let row = 0; row < ROWS; ++row) {
        for (let col = 0; col < COLS; ++col) {
            if (backtrack(row, col, word, 0)) return true
        }
    }

    return false
};

const board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]
const word = "ABCCED"
console.log(exist(board, word))
