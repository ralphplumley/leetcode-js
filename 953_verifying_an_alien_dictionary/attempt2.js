const isAlienSorted = function(words, order) {
    // setup dictionary
    let dict = {}
    for (let i = 0; i < order.length; i++) {
        dict[order[i]] = i
    }

    for (let i = 1; i < words.length; i++) {
        let word1 = words[i-1]
        let word2 = words[i]
        if (!lex_order(word1, word2, dict)) return false
    }

    return true
};

const lex_order = function (word1, word2, dict) {
   let k = 0
   let len = word1.length
   while (k < len) {
       let c1 = word1[k]
       let c2 = word2[k]
       if (c2 === undefined) return false
       if (dict[c1] > dict[c2]) return false
       if (dict[c1] < dict[c2]) return true
       k++
   }

   // in case word1 is shorter (equal too) than word2
    return word1.length <= word2.length
}


// let words = ["fxasxpc","dfbdrifhp","nwzgs","cmwqriv","ebulyfyve","miracx","sxckdwzv","dtijzluhts","wwbmnge","qmjwymmyox"]
// let order = "zkgwaverfimqxbnctdplsjyohu"

let words = ["dthkre","vvjrym","zvrzapstvm","dcjkqyrr","ditmpogp","gpzzmilb","dymhwov","bytjqyqupf","vjeaumrdy","lwvozpyx"]
let order = "tngjwhflzomueqkisxcpybdavr"

console.log(isAlienSorted(words, order))

// module.exports = {
//     isAlienSorted: function() {},
//     lex_order: function() {},
// };

// module.exports = isAlienSorted
// module.exports = lex_order
