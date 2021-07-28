/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function(board) {
    const rows = board.length
    const cols = board[0].length

    let count = 0
    for (let row = 0; row < rows; ++row) {
        for (let col = 0; col < cols; ++col) {
            // only increment our count if it's the start of a ship
            count += (isShipStart(board, row, col)) ? 1 : 0
        }
    }

    return count
};

const isShipStart = (board, row, col) => {
    return board[row][col] === 'X'
        && (row === 0 || board[row - 1][col] !== 'X')
        && (col === 0 || board[row][col - 1] !== 'X')
}
