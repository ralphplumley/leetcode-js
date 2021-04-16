/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function(prices) {
    let minprice = Infinity
    let maxprofit = 0

    for (let i = 0; i < prices.length; i++) {
        let price = prices[i]
        let diff = price - minprice

        if (price < minprice) {
            minprice = price
        } else if (diff > maxprofit) {
            maxprofit = diff
        }
    }

    return maxprofit

};

let prices = [7,1,5,3,6,4]
console.log(maxProfit(prices))