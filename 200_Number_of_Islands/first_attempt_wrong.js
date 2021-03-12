/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = function(grid) {
    let count = 0
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            let cellVal = grid[row][col]
            if (cellVal === "1" || cellVal === "-1") {
                // check to see if neighbors have a -1
                if (!checkNeighbors(grid, row, col)) count++
                grid[row][col] = "-1"
                flipNeighbors(grid, row, col)
            }
        }
    }

    return count
};
/*
row col
[]  []


[ [0,    1,    0,    1,    0],
  [0,    0,    1,    1,    1],
  [1,    0,    0,    1,    0],
  [0,    1,    1,    0,    0],
  [1,    0,    1,    0,    1] ]

 */
const flipNeighbors = function (grid, row, col) {
    flip(grid, row-1, col) // top
    flip(grid, row, col-1) // left
    flip(grid, row+1, col) // bottom
    flip(grid, row, col+1) // right
}

const flip = function (grid, row, col) {
    // bound checking
    if (row === -1) return
    if (row === grid.length) return
    if (col === -1) return
    if (col === grid.length) return

    // ok, if we get here, flip
    if (grid[row][col] === "1") grid[row][col] = "-1"
}

const checkNeighbors = function (grid, row, col) {
    if (row >= 0 && row <= grid.length - 1) {
        if (col >= 0 && col <= grid[row].length - 1) {
            if (checkTop(grid, row, col)) return true
            if (checkBottom(grid, row, col)) return true
            if (checkLeft(grid, row, col)) return true
            if (checkRight(grid, row, col)) return true
        }
    }

    return false
}

const checkTop = function (grid, row, col) {
    if (row === 0) return false
    if (grid[row-1][col] === "1") return true
    if (grid[row-1][col] === "-1") return true
    return false
}

const checkBottom = function (grid, row, col) {
    if (row === grid.length - 1) return false
    if (grid[row+1][col] === "1") return true
    if (grid[row+1][col] === "-1") return true
    return false
}

const checkLeft = function (grid, row, col) {
    if (col === 0) return false
    if (grid[row][col+1] === "1") return true
    if (grid[row][col-1] === "-1") return true
    return false
}

const checkRight = function (grid, row, col) {
    if (col === grid.length - 1) return false
    if (grid[row][col-1] === "1") return true
    if (grid[row][col+1] === "-1") return true
    return false
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

console.log(numIslands(grid4))