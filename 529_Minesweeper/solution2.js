/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
const updateBoard = function(board, click) {
    const directions = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0],
        [-1, -1],
        [1, 1],
        [1, -1],
        [-1, 1]
    ]

    let row = click[0],
        col = click[1],
        m = board.length,
        n = board[0].length,
        cell = board[row][col]

    if (cell === 'M' || cell === 'X') {
        board[row][col] = 'X'
        return board
    }

    let numMines = 0

    // first pass, let's check each direction for mines
    directions.forEach(direction => {
        const newRow = direction[0] + row
        const newCol = direction[1] + col

        // if it's inbounds, and new cell we're checking is a bomb / 'M', increment count
        if (newRow >= 0 && newRow < m && newCol >= 0 && newCol < n && board[newRow][newCol] === 'M') numMines++
    })

    if (numMines > 0) {
        board[row][col] = numMines.toString()
        return board
    }
    board[row][col] = 'B'

    // second pass, if the new cell is 'E', recurse
    directions.forEach(direction => {
        const newRow = direction[0] + row
        const newCol = direction[1] + col

        // if it's inbounds, and new cell we're checking is a bomb / 'M', increment count
        if (newRow >= 0 && newRow < m && newCol >= 0 && newCol < n && board[newRow][newCol] === 'E') {
            // recurse, but pass newRow and newCol as click coordinates
            updateBoard(board, [newRow, newCol])
        }
    })

    // ok return board at the end
    return board
};

const input = [
    ['E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'M', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E']
]

const click = [3, 0]

console.log(updateBoard(input, click))