/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let map = new Map()

    for (let char of s) {
        if (map.has(char)) {
            map.set(char, map.get(char) + 1)
        } else {
            map.set(char, 1)
        }
    }

    for (let i = 0; i < s.length; i++) {
        let char = s[i]
        if (map.get(char) === 1) return i
    }

    return -1
};
