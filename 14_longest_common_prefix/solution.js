/**
 * @param {string[]} strs
 * @return {string}
 */
let longestCommonPrefix = function(strs) {
    if (strs.length === 0) return ""
    // find min length word in strs
    let length = Infinity
    for (let i = 0; i < strs.length; i++) {
        if (strs[i].length < length) length = strs[i].length
    }

    let ans = ''
    // go through each word, length times
    let i = 0
    while (i < length) {
        let char = strs[0][i]
        for (let j = 0; j < strs.length; j++) {
            let word = strs[j]
            // if we made it to the end of the loop, store the char
            if (j === strs.length-1) {
                if (word[i] === char) {
                   ans += char
                } else {
                   return ans
                }
            }

            // if not the last character, and if it's not char, break
            if (word[i] !== char) break
        }
        i++
    }
    return ans
};
