/**
 * @param {number[]} prices
 * @return {number}
 */
// Kadanes Algo
const maxProfit = function(prices) {
    let maxCur = 0,
        maxSoFar = 0

    for (let i = 1; i < prices.length; i++) {
        maxCur = Math.max(0, maxCur += prices[i] - prices[i-1])
        maxSoFar = Math.max(maxCur, maxSoFar)
    }

    return maxSoFar
};

let prices = [7,1,5,3,6,4]
console.log(maxProfit(prices))