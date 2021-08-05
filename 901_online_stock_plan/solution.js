var StockSpanner = function() {
    this.prices = []
};

/**
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    let count = 1
    while (this.prices.length && price >= this.prices[this.prices.length - 1][0]) {
        count += this.prices[this.prices.length - 1][1]
        this.prices.pop()
    }

    this.prices.push([price, count])
    return count
};

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
