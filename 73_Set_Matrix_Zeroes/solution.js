/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let isCol = false,
        row = matrix.length,
        col = matrix[0].length

    for (let i = 0; i < row; i++) {
        if (matrix[i][0] === 0) {
            isCol = true
        }

        for (let j = 1; j < col; j++) {
            // if an element is 0, we set the first element of the corresponding row and column to 0
            if (matrix[i][j] === 0) {
                matrix[0][j] = 0
                matrix[i][0] = 0
            }
        }
    }

    // iterate over the array once again and using the first row and first column, update the elements
    for (let i = 1; i < row; i++) {
        for (let j = 1; j < col; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0
            }
        }
    }

    // see if the first row needs to be set to zero
    if (matrix[0][0] === 0) {
        for (let j = 0; j < col; j++) {
            matrix[0][j] = 0
        }
    }

    // see if the first column needs to be set to zero
    if (isCol) {
        for (let i = 0; i < row; i++) {
            matrix[i][0] = 0
        }
    }
};

let matrix = [
    [1,1,1],
    [1,0,1],
    [1,1,1]
]
console.log(setZeroes(matrix))