/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
const change = function(amount, coins) {
    let map = new Map()
    return makeChange(amount, coins, 0, map)
};

const makeChange = function(amount, coins, index, map) {
    if (amount === 0) return 1
    if (index >= coins.length) return 0

    let key = amount + '-' + index
    if (map.has(key)) return map.get(key)

    let coinAmount = coins[index]
    let ways = 0
    for (let i = 0; i * coinAmount <= amount; i++) {
        // go to next coin, assuming i coins of coingAmount
        let amountRemaining = amount - i * coinAmount
        ways += makeChange(amountRemaining, coins, index + 1, map)
    }

    map.set(key, ways)
    return ways
}
