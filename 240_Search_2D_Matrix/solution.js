/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = function(mat, targ) {
    let matrix = mat,
        target = targ

    if (matrix === null || matrix.length === 0) return false

    const divide = function(left, up, right, down) {
        // if this sub matrix has no height or no width
        if (left > right || up > down) {
            return false
        }

        // target is already larger than the largest element,
        // or smaller than the smallest element in the sub matrix
        else if (target < matrix[up][left] || target > matrix[down][right]) {
            return false
        }

        let mid = left + (right - left) / 2
        // locate row such that matrix[row-1][mid] < target < matrix[row][mid]
        let row = up
        while (row <= down && matrix[row][mid] <= target) {
            let val = matrix[row][mid]
            if (val === target) {
                return true
            }
            row++
        }

        return divide(left, row, mid-1, down) || divide(mid+1, up, right, row-1)
    }


    return divide(0, 0, matrix[0].length - 1, matrix.length - 1)
};

let matrix = [[1,4,15],
              [2,12,19],
              [3,16,22]]
let target = 11

// let matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]]
// let target = 5

console.log(searchMatrix(matrix, target))