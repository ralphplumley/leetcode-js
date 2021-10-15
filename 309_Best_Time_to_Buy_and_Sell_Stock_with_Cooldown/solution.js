/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

    const MP = new Array(prices.length + 2).fill(0)

    for (let i = prices.length - 1; i >= 0; --i) {
        let C1 = 0

        // Case 1: buy and sell stock
        for (let sell = i + 1; sell < prices.length; ++sell) {
            let profit = (prices[sell] - prices[i]) + MP[sell + 2]
            C1 = Math.max(profit, C1)
        }

        // Case 2: do no transaction with the stock p[i]
        let C2 = MP[i + 1]

        // wrap up the two cases
        MP[i] = Math.max(C1, C2)
    }

    return MP[0]
};
