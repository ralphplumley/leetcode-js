/**
 * @param {string} S
 * @param {string} T
 * @return {string}
 */
const customSortString = function(S, T) {
    let mapT = new Map(),
        result = ''

    // make a map of string T
    for (let i = 0; i < T.length; i++) {
        let char = T[i]
        if (mapT.has(char)) {
            mapT.set(char, mapT.get(char) + 1)
        } else {
            mapT.set(char, 1)
        }
    }

    // construct result from string S
    for (let i = 0; i < S.length; i++) {
        let char = S[i]
        result += char.repeat(mapT.get(char))
        mapT.delete(char)
    }

    // add any characters unused in T
    let keys = Array.from(mapT.keys())
    for (let i = 0; i < keys.length; i++) {
        let key = keys[i]
        result += key.repeat(mapT.get(key))
    }

    return result
};

let string1 = "cba"
let string2 = "abcd"
console.log(customSortString(string1, string2))