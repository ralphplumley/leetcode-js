let WordDictionary = function() {
    this.trie = {};
};

WordDictionary.prototype.addWord = function(word) {
    let root = this.trie;
    for (let i = 0 ; i < word.length; i++) {
        if (!root[word[i]]) root[word[i]] = {};
        root = root[word[i]];
    }
    root.isEnd = true;
};

WordDictionary.prototype.search = function(word, map) {
    let count = this.dfs(word, 0, this.trie, map);
    return count
};

WordDictionary.prototype.dfs = function(word, index, node, map) {
    let char = word[index]

    // base case for recursion
    if (index === word.length) {
        if (node.isEnd === true) {
           return 1
        } else {
            return 0
        }
    }

    // if this character is not in our map, this word doesn't count
    if (!(char in map)) {
       return 0
    }

    if (char !== null) {
        return this.dfs(word, index + 1, node[word[index]], map);
    }

    return 0
}

let escapeRoom = function(wordlist, keypads) {
    // setup output array
    // make a trie from the wordlist words

    // for each keyword
        // set count to 0
        // setup a map {'A': true ... etc}

        // for each wordlist word (apple, pleas, plea)
            // search in the dictionary
                // at each step, check char against map

   // return output array, should be something like [0,1,3,2,0]


    let output = []

    // setup our Trie
    let wordDictionary = new WordDictionary()
    wordlist.forEach((word) => {
       wordDictionary.addWord(word)
    })

    keypads.forEach((keyword) => {
        // setup map to lookup chars
        let map = {}
        keyword.split('').forEach((char) => {
            map[char] = true
        })


        let key = keyword[0]

        // ok, go through each wordlist word again
        // we're going check each node in our trie
        // and check to see if the node char value is in our map
        let count = 0
        wordlist.forEach((word) => {
            // first, make sure the key is in this word
            let splitWord = word.split('')
            let keyInWord = splitWord.includes(key)
            if (keyInWord) {
                count += wordDictionary.search(word, map)
            }
        })
        output.push(count)
    })

    return output
}

// let wordlist = ['APPLE', 'PLEAS', 'PLEASE']
// let keypads = ['AELWXYZ', 'AELPXYZ', 'AELPSXY', 'SAELPRT', 'XAEBKSY']

let wordlist = ['MONSTER', 'STORM', 'STONE']
let keypads = ['MONSTER']

console.log(escapeRoom(wordlist, keypads))