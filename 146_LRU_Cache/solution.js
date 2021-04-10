/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this._capacity = capacity;
    this._values = new Map(); // Map of key to values. Never contains more than `capacity` keys. Keeps insertion order.
    this._numKeysInStore = 0;
};

LRUCache.prototype._markMostRecentlyUsed = function(key) {
    const originalValue = this._values.get(key);
    this._values.delete(key);
    this._values.set(key, originalValue); // Make it "most recently inserted" since Map saves insertion order
}

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    const keyValue = this._values.get(key);

    if (typeof keyValue !== 'undefined') {
        this._markMostRecentlyUsed(key);
        return keyValue;
    }

    return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    // If this key is already in the cache - we just need to update it, and mark it most recently used
    if (this._values.has(key)) {
        // Just replace it
        this._values.delete(key);
        this._values.set(key, value); // We do remove and set so this is marked as last inserted
        return;
    }

    // Otherwise, this key is new to the cache, so we need to add it:

    // If we're at capacity, make room by removing the least recently used key
    if (this._numKeysInStore === this._capacity) {
        let oldestKey;
        // Take advantage of the fact that Map is an iterator
        for (let [key, value] of this._values) {
            // Just grab the first key once it yields
            oldestKey = key;
            // And break
            break;
        }

        this._values.delete(oldestKey);
        this._numKeysInStore--;
    }

    // Now we've got room... Let's add it to the cache
    this._values.set(key, value);
    this._numKeysInStore++;
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */