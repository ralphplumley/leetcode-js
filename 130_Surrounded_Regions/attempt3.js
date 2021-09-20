/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {

    if (board === null || board.length === 0) return

    const UF = new UnionFind(board),
        ROWS = board.length,
        COLS = board[0].length,
        DUMMY_BORDER = ROWS * COLS,
        DIRECTIONS = [
            [0,1],
            [0,-1],
            [1,0],
            [-1,0],
        ]

    for (let row = 0; row < ROWS; ++row) {
        for (let col = 0; col < COLS; ++col) {
            if (board[row][col] === 'O') {
                const idx = row * COLS + col

                // if we're at a border, add slot to UF
                if (row === 0 || row === ROWS - 1 || col === 0 || col === COLS - 1) {
                    UF.union(DUMMY_BORDER, idx)
                    continue
                }

                for (let dir of DIRECTIONS) {
                    const newRow = row + dir[0],
                        newCol = col + dir[1]

                    if (newRow >= 0 && newRow < ROWS && newCol >= 0 && newCol < COLS && board[newRow][newCol] === 'O') {
                        const neighborIdx = newRow * COLS + newCol
                        UF.union(idx, neighborIdx)
                    }
                }
            }
        }
    }

    // change 'X' to 'O'
    for (let row = 0; row < ROWS; ++row) {
        for (let col = 0; col < COLS; ++col) {
            const idx = row * COLS + col
            if (board[row][col] === 'O' && UF.find(idx) !== UF.find(DUMMY_BORDER)) {
                board[row][col] = 'X'
            }
        }
    }

    console.log(board)
};

class UnionFind {
    constructor(board) {
        this.parent = new Array(board.length * board[0].length)

        const ROWS = board.length,
            COLS = board[0].length

        for (let row = 0; row < ROWS; ++row) {
            for (let col = 0; col < COLS; ++col) {
                const id = row * COLS + col
                if (board[row][col] === 'O') {
                    this.parent[id] = id
                }
            }
        }

        this.parent[ROWS * COLS] = ROWS * COLS
    }

    find(x) {
        if (x === this.parent[x]) return x
        return this.parent[x] = this.find(this.parent[x])
    }

    union(a,b) {
        const rootA = this.find(a),
            rootB = this.find(b)

        if (rootA !== rootB) this.parent[rootA] = rootB
    }

}

const board = [
    ["O","X","X","O","X"],
    ["X","O","O","X","O"],
    ["X","O","X","O","X"],
    ["O","X","O","O","O"],
    ["X","X","O","X","O"]
]
/*
    ["O","X","X","O","X"],
    ["X","X","X","X","O"],
    ["X","X","X","O","X"],
    ["O","X","O","O","O"],
    ["X","X","O","X","O"]
 */

console.log(solve(board))
