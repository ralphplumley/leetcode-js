/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

/*
// Iterative:

const uniquePaths = function(m, n) {
    if (m === 0 || n === 0) return 0
    if (m === 1 || n === 1) return 1

    const dp = Array(m).fill(Array(n).fill(1))

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i-1][j] + dp[i][j-1]
        }
    }

    return dp[m-1][n-1]
};

*/

// Recurisve
// const uniquePaths = function(m, n) {
//     let dp = new Array(m+1).fill(1).map(x => new Array(n+1).fill(0))
//
//     let recurse = function (row, col) {
//         if (row === m && col === n) return 1
//         if (row > m || col > n) return 0
//
//         if (dp[row][col]) return dp[row][col]
//         dp[row][col] = recurse(row + 1, col) + recurse(row, col + 1)
//         return dp[row][col]
//     }
//
//     return recurse(1,1)
// }

const uniquePaths = function(m, n) {
    let dp = new Array(m).fill(1).map( el => new Array(n).fill(0))

    for (let i = 0; i < dp.length; i++) {
        dp[i][0] = 1
    }

    for (let i = 0; i < dp[0].length; i++) {
        dp[0][i] = 1
    }

    for (let i = 1; i < dp.length; i++) {
        for (let j = 1; j < dp[i].length; j++) {
            dp[i][j] = dp[i-1][j] + dp[i][j-1]
        }
    }

    return dp[m-1][n-1]
}

console.log(uniquePaths(3,4))
