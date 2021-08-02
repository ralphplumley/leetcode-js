/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    if (board.length === 0) return null

    for (let row = 0; row < board.length; ++row) {
        for (let col = 0; col < board[0].length; ++col) {
            if (board[row][col] === 'O' && (row === 0 || row === board.length - 1 || col === 0 || col === board[0].length - 1)) {
                dfs(board, row, col)
            }
        }
    }


    for (let row = 0; row < board.length; ++row) {
        for (let col = 0; col < board[0].length; ++col) {
            if (board[row][col] === 'W') {
                board[row][col] = 'O'
            } else {
                board[row][col] = 'X'
            }
        }
    }

    return board
}

const dfs = (board, row, col) => {
    if (row < 0 || col < 0 || row >= board.length || col >= board[0].length || board[row][col] === 'X' || board[row][col] === 'W') return
    board[row][col] = 'W'
    dfs(board, row + 1, col)
    dfs(board, row - 1, col)
    dfs(board, row, col + 1)
    dfs(board, row, col - 1)
}

const arr = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]
console.log(solve(arr))
