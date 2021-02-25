/**
 * Initialize your data structure here.
 */
var WordDictionary = function() {
    this.trie = {};
};

/**
 * Adds a word into the data structure.
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    let root = this.trie;
    for (let i=0;i<word.length;i++) {
        if (root[word[i]]==null) root[word[i]] = {};
        root = root[word[i]];
    }
    root.isEnd = true;
};

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter.
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    return this.dfs(word, 0, this.trie);
};

WordDictionary.prototype.dfs = function(word, index, node) {
    if (index == word.length) return node.isEnd == true;

    if (word[index] == '.') {
        for (let key in node) {
            if (this.dfs(word, index + 1, node[key])) return true;
        }

    } else {
        if (node[word[index]]!=null) {
            return this.dfs(word, index + 1, node[word[index]]);
        }
    }
    return false;
}


/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

let wordDictionary = new WordDictionary();
wordDictionary.addWord("bad");
// console.log(wordDictionary.search("pad"))
// console.log(wordDictionary.search("bad"))
console.log(wordDictionary.search(".ad"))
// console.log(wordDictionary.search("b.."))