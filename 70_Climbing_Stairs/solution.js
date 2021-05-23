/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = function(n) {
    let memo = new Array(n+1).fill(-1)
    return countWays(n, memo)
};


const countWays = function(n, memo) {
    if (n < 0) {
        return 0
    } else if (n === 0) {
        return 1
    } else if (memo[n] > -1) {
        return memo[n]
    } else {
        memo[n] = countWays(n - 1, memo) + countWays(n - 2, memo)
        return memo[n]
    }
}

console.log(climbStairs(6))
