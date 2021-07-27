/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {

    /*
        // Time: O(N^2)
        // Space: O(N)
    */

    const memo = new Map()
    const set = new Set(wordDict)

    const recurse = (start) => {
        // end of string is reached
        if (start === s.length) return true

        if (memo.has(start)) return memo.get(start)

        for (let i = start; i < s.length; ++i) {
            let substr = s.substring(start, i + 1)
            if (set.has(substr) && recurse(i + 1)) {
                memo.set(start, true)
                return true
            }
        }

        memo.set(start, false)
        return false
    }

    return recurse(0)
};

const str = "leetcode"
const arr = ["leet", "code"]
console.log(wordBreak(str, arr))
