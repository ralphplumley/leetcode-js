var Trie = function() {
    this.root = {}
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {

    /*
        TC: O(m), m = length of key
        SC: O(m)
    */

    let node = this.root
    for (let char of word) {
        if (!node[char]) node[char] = {}
        node = node[char]
    }

    node['isEnd'] = true
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {

    /*
        TC: O(m), m = length of key
        SC: O(1)
    */

    let node = this.root
    for (let char of word) {
        if (!node[char]) return false
        node = node[char]
    }

    return node['isEnd'] === true
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {

    /*
        TC: O(m), m = length of key
        SC: O(1)
    */

    let node = this.root
    for (let char of prefix) {
        if (!node[char]) return false
        node = node[char]
    }

    return true
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
