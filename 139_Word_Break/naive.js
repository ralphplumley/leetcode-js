/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {

    /*
       0 1 2 3 4 5 6 7
      "l e e t c o d e"
                     ^
     */

    const set = new Set(wordDict)

    const recurse = (start) => {
        // end of string is reached
        if (start === s.length) return true

        for (let i = start; i < s.length; ++i) {
            let substr = s.substring(start, i + 1) // "code"
            if (set.has(substr) && recurse(i + 1)) {
                return true
            }
        }

        return false
    }

    return recurse(0)
};

const str = "leetcode"
const arr = ["leet", "code"]
console.log(wordBreak(str, arr))
