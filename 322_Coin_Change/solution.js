/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
const coinChange = function(coins, amount) {
    if (amount < 1) return 0
    return dp(coins, amount, new Array(amount).fill(0))
};

const dp = function(coins, remainder, count) {
    if (remainder < 0) return -1
    if (remainder === 0) return 0
    if (count[remainder - 1] !== 0) return count[remainder - 1]

    let min = Infinity
    for (let i = 0; i < coins.length; i++) {
        let coin = coins[i]
        let result = dp(coins, remainder - coin, count)
        if (result >= 0 && result < min) {
            min = 1 + result
        }
    }
    count[remainder - 1] = (min === Infinity) ? -1 : min
    return count[remainder - 1]
}

let coins = [1,2,5],
    amount = 11

console.log(coinChange(coins, amount))