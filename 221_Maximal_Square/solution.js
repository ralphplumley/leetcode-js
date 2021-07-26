/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    const rows = matrix.length,
        cols = rows > 0 ? matrix[0].length : 0

    const dp = new Array(rows + 1).fill(0).map(() => new Array(cols + 1).fill(0))

    let maxsqlen = 0

    for (let i = 1; i <= rows; i++) {
        for (let j = 1; j <= cols; j++) {
            if (matrix[i-1][j-1] === '1') {

                const a = dp[i][j-1]
                const b = dp[i-1][j]
                const c = dp[i-1][j-1]

                dp[i][j] = Math.min(Math.min(a,b), c) + 1
                maxsqlen = Math.max(maxsqlen, dp[i][j])
            }
        }
    }
    return maxsqlen * maxsqlen
};

const matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
console.log(maximalSquare(matrix))
