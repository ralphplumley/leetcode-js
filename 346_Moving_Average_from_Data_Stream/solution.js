/**
 * Initialize your data structure here.
 * @param {number} size
 */
var MovingAverage = function(size) {
    this.size = size
    this.pointer = 0
    this.count = 0
    this.sum = 0
    this.queue = []
};

/**
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
    if (this.count < this.size) {
        this.queue[this.pointer] = val
        this.sum += val
        this.count++
    } else {
        this.sum -= this.queue[this.pointer]
        this.queue[this.pointer] = val
        this.sum += val
    }

    this.pointer++
    // if pointer is at last slot, bring back to 0
    if (this.pointer === this.size) this.pointer = 0

    return this.sum / this.count
};

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */
