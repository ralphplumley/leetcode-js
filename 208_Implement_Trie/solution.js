/**
 * Initialize your data structure here.
 */
var Trie = function() {
    this.root = {}
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let node = this.root
    word.split('').forEach((char) => {
        if (!node[char]) node[char] = {}
        node = node[char]
    })
    node.isEnd = true
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let node = this.searchNode(word)
    return node !== null ? node.isEnd === true : false
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let node = this.searchNode(prefix)
    return node !== null
};

Trie.prototype.searchNode = function(word) {
    let node = this.root
    for (let char of word.split('')) {
        if (node[char]) {
            node = node[char]
        } else {
            return null
        }
    }
    return node
}
/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

let trie = new Trie();
console.log(trie.insert("apple"))

console.log(trie.search("apple"))     // returns true
console.log(trie.search("app"))       // returns false
console.log(trie.startsWith("app"))         // returns true
console.log(trie.insert("app"))
console.log(trie.search("app"))        // returns true