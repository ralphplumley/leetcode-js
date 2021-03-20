/**
 * // This is the BinaryMatrix's API interface.
 * // You should not implement it, or speculate about its implementation
 * function BinaryMatrix() {
 *     @param {integer} row, col
 *     @return {integer}
 *     this.get = function(row, col) {
 *         ...
 *     };
 *
 *     @return {[integer, integer]}
 *     this.dimensions = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {BinaryMatrix} binaryMatrix
 * @return {number}
 */
const leftMostColumnWithOne = function(binaryMatrix) {
    // get row using helper
    // get col using helper

    // while row is less than matrix.length
        // while col is greater -1
            // start at top right
                // if cell is a 1
                    // store col as answer
                    // move left
                // else
                    // move down

    let matrixSize = binaryMatrix.dimensions()
    let rows = matrixSize[0]
    let cols = matrixSize[1]

    let ans
    let col = cols - 1
    let row = 0

    while (row < rows && col > -1) {
        if (binaryMatrix.get(row, col) === 1) {
            ans = col
            col--
        } else {
            row++
        }
    }

    return ans
};