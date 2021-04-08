/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = prices[0],
        max = prices[0]

    let high = null

    for (let i = 1; i < prices.length; i++) {
        let num = prices[i]
        if (num < min && num < max) {

            if ((max - min) > high) {
                high = max - min
            }

            min = num
            max = num
        } else if (num > min && num > max) {
            max = num
        }

    }

    if ((max - min) > high) {
        high = max - min
    }

    return ((min === max) && (high < max)) ? 0 : high
};

/*
time: O(p) where p is number of elements in prices
space: O(1) no extra space used
 */