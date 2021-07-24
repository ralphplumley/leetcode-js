/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(s1, s2) {

    /* Naive

    const lcs = (s1, s2, m, n) => {
        if (m === 0 || n === 0) return 0
        if (s1.charAt(m - 1) === s2.charAt(n - 1)) return 1 + lcs(s1, s2, m - 1, n - 1)
        else return Math.max(lcs(s1, s2, m, n - 1), lcs(s1, s2, m - 1, n))
    }

    return s1.length + s2.length - 2 * lcs(s1, s2, s1.length, s2.length)

    */

    /*
        ------------------------------------------------------------------------------------------
        Memo
        Time: O(m*n), m = s1.length, n = s2.length
        Space: O(m*n), depth of recursion tree will go upto max(m, n)
    */

    const memo = new Map()

    const lcs = (s1, s2, m, n, memo) => {
        if (m === 0 || n === 0) return 0

        const key = m + '#' + n
        if (memo.has(key)) return memo.get(key)

        let result
        if (s1.charAt(m - 1) === s2.charAt(n - 1)) {
            result = 1 + lcs(s1, s2, m - 1, n - 1, memo)
        } else {
            result = Math.max(lcs(s1, s2, m, n - 1, memo), lcs(s1, s2, m - 1, n, memo))
        }

        memo.set(key, result)
        return result
    }

    return s1.length + s2.length - 2 * lcs(s1, s2, s1.length, s2.length, memo)
};
