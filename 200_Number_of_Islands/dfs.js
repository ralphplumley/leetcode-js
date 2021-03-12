/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = function(grid) {
    if (grid === null || grid.length === 0) return 0

    let count = 0
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            if (grid[row][col] === "1") {
                count += 1
            }
            dfs(grid, row, col)
        }
    }

    return count
};

const dfs = function(grid, row, col) {
    if (row < 0 || col < 0 || row >= grid.length || col >= grid[row].length || grid[row][col] === "0") {
        return 0
    }

    grid[row][col] = "0"
    dfs(grid, row-1, col)
    dfs(grid, row+1, col)
    dfs(grid, row, col-1)
    dfs(grid, row, col+1)
}

const grid1 = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
] // => 1

const grid2 = [
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
] // => 3

const grid3 = [
    ["1","0","1","1","0","1","1"]
] // => 3

const grid4 = [
    ["1","0","1","1","1"],
    ["1","0","1","0","1"],
    ["1","1","1","0","1"]
] //=> 1

const grid5 = [
    ["1","1","0","0"],
    ["1","0","1","0"],
    ["1","0","1","0"]
] //=> 1

console.log(numIslands(grid5))
