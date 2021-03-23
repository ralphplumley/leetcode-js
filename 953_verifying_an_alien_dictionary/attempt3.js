const isAlienSorted = function(words, order) {
    let map = new Map()
    for(let i = 0; i < order.length; i++) {
        let char = order[i]
        map.set(char, i)
    }

    for (let i = 1; i < words.length; i++) {
        let word1 = words[i-1]
        let word2 = words[i]
        if (!lex_order(word1, word2, map)) return false
    }

    // if we get to there, alien dictionary is in lexical order
    return true
};

const lex_order = function (word1, word2, map) {
    let k = 0
    let len = word1.length
    while (k < len) {
        let c1 = word1[k]
        let c2 = word2[k]

        if (c2 === undefined) return false

        if (map.get(c1) > map.get(c2)) return false
        if (map.get(c1) < map.get(c2)) return true

        k++
    }

    // in case word1 is shorter (equal too) than word2
    // return word1.length <= word2.length
    return true
}


words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz"

console.log(isAlienSorted(words, order))