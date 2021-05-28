/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let count = 0,
        queue = [],
        row = grid.length,
        col = grid[0].length

    const dirs = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0]
    ]

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === '1') {
                count++
                bfs(i, j)
            }
        }
    }

    function bfs(i, j) {
        queue.push([i, j])

        while (queue.length !== 0) {
            const [r, c] = queue.shift()
            if (r < 0 || c < 0 || c >= col || r >= row) continue
            if (grid[r][c] === '0') continue
            grid[r][c] = '0'

            for (let [x, y] of dirs) {
                if (grid[r+x] && grid[r + x][c + y] === '1') {
                    queue.push([r+x, c + y])
                }
            }
        }
    }

    return count
};

const grid1 = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
]

console.log(numIslands(grid1))
