/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    const ROWS = grid.length,
        COLS = grid[0].length,
        DIRS = [
            [0,1],
            [1,0],
            [0,-1],
            [-1,0]
        ]

    let count = 0
    for (let row = 0; row < ROWS; ++row) {
        for (let col = 0; col < COLS; ++col) {
            const cellVal = grid[row][col]

            if (cellVal === 1) {
                for (dir of DIRS) {
                    const newRow = row + dir[0],
                        newCol = col + dir[1]

                    // if it's on the edge of the grid, add 1
                    if (newRow < 0 || newRow >= ROWS || newCol < 0 || newCol >= COLS) count++

                    // if the value at new position is 0, add 1
                    else if (grid[newRow][newCol] === 0) count++
                }
            }
        }
    }

    return count

};
