const pacificAtlantic = function(matrix) {
    if (matrix.length === 0 || matrix[0].length === 0) return []

    const dfs = (row, col, reachable) => {
        // this cell is reachable, so mark it true
        reachable[row][col] = true

        for (let dir of directions) {
            let newRow = row + dir[0],
                newCol = col + dir[1]

            // check if new cell is within bounds
            if (!inBounds(newRow, newCol, rows, cols)) continue

            // check that the new cell hasn't already been visited
            if (reachable[newRow][newCol]) continue

            // check that the new cell has a higher or equal height,
            // so that water can flow from the new cell to the old cell
            if (landHeights[newRow][newCol] < landHeights[row][col]) continue

            // if we've gotten this far, that means the new cell is reachable
            dfs(newRow, newCol, reachable)
        }
    }

    const directions = [[0,1], [1,0],[-1,0],[0,-1]],
          rows = matrix.length,
          cols = matrix[0].length,
          landHeights = matrix,
          pacificReachable = [],
          atlanticReachable = []

    // fill arrays like a noob
    for (let i = 0; i < rows; ++i) {
        pacificReachable[i] = Array(matrix[0].length).fill(0)
        atlanticReachable[i] = Array(matrix[0].length).fill(0)
    }

    // loop through each cell adjacent to the oceans and start a DFS
    for (let row = 0; row < rows; ++row) {
        dfs(row, 0, pacificReachable)
        dfs(row, cols - 1, atlanticReachable)
    }

    for (let col = 0; col < cols; ++col) {
        dfs(0, col, pacificReachable)
        dfs(rows - 1, col, atlanticReachable)
    }

    // find all cells that can reach both oceans
    const commonCells = []
    for (let row = 0; row < rows; ++row) {
        for (let col = 0; col < cols; ++col) {
            if (pacificReachable[row][col] && atlanticReachable[row][col]) commonCells.push([row, col])
        }
    }

    return commonCells

};

const inBounds = (row, col, rows, cols) => {
    if (row < 0 || row >= rows || col < 0 || col >= cols) return false
    return true
}

const arr = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]
console.log(pacificAtlantic(arr))
