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
var leftMostColumnWithOne = function(binaryMatrix) {
    let dimensions = binaryMatrix.dimensions()
    let rows = dimensions[0]
    let cols = dimensions[1]

    let row = 0
    let col = cols - 1
    let answer = -1
    let val
    while (row < rows && col > -1) {
        val = binaryMatrix.get(row, col)
        if (val === 1) {
            answer = col
            if(col >= 0) {
                col--
            }
        } else if (val === 0) {
            if(row < rows) {
                row++
            }
        }
    }
    return answer
};