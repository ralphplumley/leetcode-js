/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    if (board === null || board.length === 0) return

    const disjointSets = new DisjointSets(board),
        rows = board.length,
        cols = board[0].length,
        dummyBorder = rows * cols

    const directions = [
        [0,1],
        [0,-1],
        [1,0],
        [-1,0],
    ]

    for (let row = 0; row < rows; ++row) {
        for (let col = 0; col < cols; ++col) {
            if (board[row][col] === 'O') {

                const borderO = row * cols + col

                if (row === 0 || row === rows - 1 || col === 0 || col === cols - 1) {
                    disjointSets.union(dummyBorder, borderO)
                    continue
                }

                for (let dir of directions) {
                    const nRow = row + dir[0],
                        nCol = col + dir[1]

                    if (nRow >= 0 && nCol >= 0 && nRow < rows && nCol < cols && board[nRow][nCol] === 'O') {
                        const neighbor = nRow * cols + nCol
                        disjointSets.union(borderO, neighbor)
                    }
                }
            }
        }
    }

    // change 'X' to 'O'
    for (let row = 0; row < rows; ++row) {
        for (let col = 0; col < cols; ++col) {
            if (board[row][col] === 'O' && disjointSets.find(row * cols + col) !== disjointSets.find(dummyBorder)) {
                board[row][col] = 'X'
            }
        }
    }
};

class DisjointSets {

    constructor(board) {
        this.parent = new Array(board.length * board[0].length)

        const rows = board.length
        const cols = board[0].length

        for (let row = 0; row < rows; ++row) {
            for (let col = 0; col < cols; ++col) {
                if (board[row][col] === 'O') {
                    const id = row * cols + col
                    this.parent[id] = id
                }
            }
        }


        this.parent[rows * cols] = rows * cols
    }

    find(x) {
        if (x === this.parent[x]) return x
        return this.parent[x] = this.find(this.parent[x])
    }

    union(x, y) {
        const rootX = this.find(x),
            rootY = this.find(y)

        if (rootX !== rootY) this.parent[rootX] = rootY
    }

}



