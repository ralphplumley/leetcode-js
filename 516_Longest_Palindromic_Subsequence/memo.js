/**
 * @param {string} s
 * @return {number}
 */

/*
    Time: O(N)
    Space: O(N)
 */
var longestPalindromeSubseq = function(s) {

    const memo = []

    const recurse = (start, end) => {
        if (start > end) return 0
        if (start === end) return 1

        memo[start] = memo[start] || []
        if (typeof memo[start][end] === 'undefined') {

            // case 1 - both characters match
            if (s[start] === s[end]) return 2 + recurse(start + 1, end - 1)

            // case 2 - skip one character, either from the beginning or the end
            const sum1 = recurse(start + 1, end)
            const sum2 = recurse(start, end - 1)

            memo[start][end] = Math.max(sum1, sum2)
        }

        return memo[start][end]
    }

    return recurse(0, s.length - 1)

};
