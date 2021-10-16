/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let length = prices.length
    if (length <= 1) return 0

    let leftMin = prices[0],
        rightMax = prices[length - 1]

    const leftProfits = new Array(length).fill(0),
        rightProfits = new Array(length + 1).fill(0)

    // construct bidirectional DP array
    for (let left = 1; left < length; ++left) {
        let foo = Math.max(leftProfits[left - 1], prices[left] - leftMin)
        leftProfits[left] = foo
        leftMin = Math.min(leftMin, prices[left])

        let right = length - 1 -left
        rightProfits[right] = Math.max(rightProfits[right + 1], rightMax - prices[right])
        rightMax = Math.max(rightMax, prices[right])
    }

    let maxProfit = 0
    for (let i = 0; i < length; ++i) {
        maxProfit = Math.max(maxProfit, leftProfits[i] + rightProfits[i+1])
    }

    return maxProfit
};
