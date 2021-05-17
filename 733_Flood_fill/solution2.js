/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
const floodFill = function(image, startRow, startCol, newColor) {
    const oldColor = image[startRow][startCol]
    if (oldColor === newColor) return image
    return recurse(image, startRow, startCol, oldColor, newColor)
};

const recurse = function(image, row, col, oldColor, newColor) {
    if (row < 0 || row >= image.length || col < 0 || col >= image[0].length) return

    if (image[row][col] === oldColor) {
        image[row][col] = newColor
        recurse(image, row - 1, col, oldColor, newColor)  // up
        recurse(image, row + 1, col, oldColor, newColor)  // down
        recurse(image, row, col - 1, oldColor, newColor)  // left
        recurse(image, row, col + 1, oldColor, newColor)  // right
    }

    return image
}

let image = [[1,1,1],[1,1,0],[1,0,1]]
console.log(floodFill(image, 1, 1,2))

