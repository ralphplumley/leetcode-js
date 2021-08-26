/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const result = []

    let rows = matrix.length,
        cols = matrix[0].length

    let up = 0,
        left = 0,
        right = cols - 1,
        down = rows -1

    while (result.length < rows * cols) {
        // traverse from left to right
        for (let col = left; col <= right; ++col) {
            result.push(matrix[up][col])
        }

        // traverse down
        for (let row = up + 1; row <= down; ++row) {
            result.push(matrix[row][right])
        }

        // make sure we are now on a different row
        if (up !== down) {
            // traverse from right to left
            for(let col = right - 1; col >= left; --col) {
                result.push(matrix[down][col])
            }
        }

        // make sure we are now on a different col
        if (left !== right) {
            // traverse upward
            for (let row = down - 1; row > up; --row) {
                result.push(matrix[row][left])
            }
        }

        left++
        right--
        up++
        down--
    }

    return result
};