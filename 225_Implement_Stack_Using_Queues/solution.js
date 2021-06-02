/**
 * Initialize your data structure here.
 */
var MyStack = function() {
    this.q1 = []
    this.q2 = []
};

/**
 * Push element x onto stack.
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.q1.push(x)
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
    if (this.q1.length === 0) return -1
    while (this.q1.length > 1) {
        this.q2.push(this.q1.shift())
    }

    let poppedElement = this.q1.pop()

    // move everything back to q1
    while (this.q2.length > 0) {
        this.q1.push(this.q2.shift())
    }

    return poppedElement
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
    if (this.q1.length === 0) return -1
    return this.q1[this.q1.length - 1]
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return !this.q1.length > 0
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
