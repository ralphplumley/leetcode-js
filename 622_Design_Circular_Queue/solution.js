/**
 * @param {number} k
 */
var MyCircularQueue = function(k) {
    this.size = k
    this.queue = new Array(k)
    this.head = null
    this.tail = null
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    if (this.isFull()) return false

    if (this.head === null || this.tail === null)  {
        this.queue[0] = value
        this.head = 0
        this.tail = 0

    } else {
        if (this.tail < this.size -1) {
            this.tail++
        } else {
            this.tail = 0
        }
        this.queue[this.tail] = value
    }

    return true

};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    if (this.head === null || this.tail === null) return false

    if (this.head === this.tail) {
        this.queue[this.head] = null
        this.head = null
        this.tail = null
    } else {
        this.queue[this.head] = null
        if (this.head < this.size - 1) {
            this.head++
        } else {
            this.head = 0
        }
    }

    return true
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    if (this.head === null) return -1
    return this.queue[this.head]
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    if (this.tail === null) return -1
    return this.queue[this.tail]
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    return this.head === null && this.tail === null ? true : false
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    if (this.head === 0 && this.tail === this.size - 1) {
        return true
    }

    if (this.tail + 1 === this.head) {
        return true
    }

    return false
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
