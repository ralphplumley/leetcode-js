/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
    this.map = new Map()
    this.elements = []
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (this.map.has(val)) return false

    const index = this.elements.length
    this.elements.push(val)
    this.map.set(val, index)

    return true
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (!this.map.has(val)) return false

    const index = this.map.get(val)

    // moves the value to the end of the array, so we can just pop() for O(1) removal
    swap(this.elements, index, this.elements.length)

    this.elements.pop()
    this.map.delete(val)

    return true
};

const swap = (arr, index1, index2) => {
    const temp = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = temp
}

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    const index = Math.floor(Math.random() * this.elements.length + 1);
    return this.elements[index]
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */