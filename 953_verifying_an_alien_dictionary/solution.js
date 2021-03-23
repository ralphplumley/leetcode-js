/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
let isAlienSorted = function(words, order) {
    // setup a dictionary
    let dict = {}
    for (let i = 0; i < order.length; i++) {
        let char = order[i]
        dict[char] = i
    }

    for (let j = 1; j < words.length; j++) {
        let w1 = words[j-1]
        let w2 = words[j]
        if (!lex_order(w1, w2, dict)) return false
    }

    return true

};

function lex_order(w1, w2, dict) {
    let k = 0
    while (k < w1.length) {
        let c1 = w1[k]
        let c2 = w2[k]
        if (c2 === undefined) return false
        if (dict[c1] > dict[c2]) return false
        if (dict[c1] < dict[c2]) return true
        k++
    }
    //return w1.length <= w2.length
    return true
}

// console.log(isAlienSorted(["hello","leetcode"], "hlabcdefgijkmnopqrstuvwxyz"))
// console.log(isAlienSorted(["word","world","row"], "worldabcefghijkmnpqstuvxyz"))
console.log(isAlienSorted(["apple", "app"], "abcdefghijklmnopqrstuvwxyz"))

// module.exports = {
//     isAlienSorted: function() {},
//     lex_order: function() {},
// };

module.exports = isAlienSorted
// module.exports = lex_order
