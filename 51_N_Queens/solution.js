/**
 * @param {number} n
 * @return {string[][]}
 */
const solveNQueens = function(n) {
    let res = []
    solver(0, new Array(), n, res)
    return res
};

function solver(cur_row, colPlacements, n, res) {
    // did we reach beyond the last row?
    if (cur_row === n) {
        let board = generateBoard(n, colPlacements)
        res.push(board)
        return
    }

    // try to place a queen in every column in the current row
    for (let col = 0; col < n; col++) {
        colPlacements.push(col)
        // if this is a valid placement, recurrse on the next row
        // since we can't have 2 queens on the same row
        if (isValid(colPlacements)) solver(cur_row + 1, colPlacements, n, res)

        // if the placement is invalid, or we have explored all the way deep
        // then we come back and undo our choice
        colPlacements.pop()
    }
}

function generateBoard(n, colPlacements) {
    let board = []
    // make row for every queen in placements

    for (let row = 0; row < colPlacements.length; row++) {
        let board_row = []
        for (let col = 0; col < n; col++) {
            if (col === colPlacements[row]) {
                board_row.push("Q")
            } else {
                board_row.push(".")
            }
        }
        board.push(board_row.join(""))
    }
    return board
}

function isValid(colPlacements) {
    let n = colPlacements.length
    let cur_row = n-1
    // for all previous rows or queens, since each row must have 1 queen
    // we only need to validate same col attack and diagonal attack

    // 1. for vertical attack the col position of the queen we just inserted will be
    // equal to that of some other existing queens

    // 2. for diagonal attack the colDistance and rowDistance will be the same
    for (let row = 0; row < cur_row; row++) {
        let colDistance = Math.abs(colPlacements[cur_row] - colPlacements[row])
        let rowDistance = cur_row - row
        if (colDistance === 0 || rowDistance === colDistance) return false
    }

    return true
}

console.log(solveNQueens(4))
