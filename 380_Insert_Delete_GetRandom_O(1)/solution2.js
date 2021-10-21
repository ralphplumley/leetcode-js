/**
 * Initialize your data structure here.
 */
var RandomizedSet = function () {
    this.items = []
    this.map = new Map()
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
    if (this.map.has(val)) return false

    const index = this.items.length
    this.items.push(val)

    // set val to be at index
    this.map.set(val, index)

    return true
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
    if (this.map.has(val)) {
        const index = this.map.get(val)

        // move this element to the end of the array
        const tmp = this.items[index],
            lastVal = this.items[this.items.length - 1]
        this.items[index] = lastVal
        this.map.set(lastVal, index)
        this.items[this.items.length - 1] = tmp

        // ok, actually remove from array by popping, which should be our value
        this.items.pop()
        // and remove from our map
        this.map.delete(val)

        return true
    }

    return false
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
    const randomIndex = Math.floor(Math.random() * this.items.length);
    return this.items[randomIndex]
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */