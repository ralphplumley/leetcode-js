var numIslands = function(grid) {
    if (grid === null || grid.length === 0) return 0

    const dfs = function (grid, row, col) {
        let num_rows = grid.length,
            num_cols = grid[0].length

        if (row < 0 || col < 0 || row >= num_rows || col >= num_cols || grid[row][col] === '0') return

        grid[row][col] = '0'
        dfs(grid, row - 1, col)
        dfs(grid, row + 1, col)
        dfs(grid, row, col - 1)
        dfs(grid, row, col + 1)
    }

    let num_rows = grid.length,
        num_cols = grid[0].length,
        num_islands = 0

    for (let row = 0; row < num_rows; row++) {
        for (let col = 0; col < num_cols; col++) {
            if (grid[row][col] === '1') {
                num_islands++
                dfs(grid, row, col)
            }
        }
    }

    return num_islands
}

/*
    Time: O(MxN) where M is the number of rows and N is the number of cols
    Space: O(min(M,N)) because in worst case where the grid is filled with lands,
    the size of queue can grow up to min(M, N)
 */

const input = [
    ["1","1","1"],
    ["0","1","0"],
    ["1","1","1"]
]
console.log(numIslands(input))
