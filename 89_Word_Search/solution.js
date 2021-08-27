/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const ROWS = board.length,
        COLS = board[0].length

    const backtrack = (row, col, word, index) => {
        // step 1) check the bottom case
        if (index >= word.length) return true

        // step 2) check the boundaries
        if (row < 0 || row === ROWS || col < 0 || col === COLS || board[row][col] !== word.charAt(index)) return false

        // step 3) explore the neighors in DFS
        let ret = false
        // mark the path before the next exploration
        board[row][col] = '#'

        let rowOffsets = [0, 1, 0, -1]
        let colOffsets = [1, 0, -1, 0]

        for (let dir = 0; dir < 4; ++dir) {
            ret = backtrack(row + rowOffsets[dir], col + colOffsets[dir], word, index + 1)
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

