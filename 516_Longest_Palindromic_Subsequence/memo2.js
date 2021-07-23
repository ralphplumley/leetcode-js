/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {

    const memo = new Map()

    const recurse = (start, end) => {
        if (start > end) return 0
        if (start === end) return 1

        const key = start + '#' + end
        if (memo.has(key)) return memo.get(key)

        let result
        // case 1: both chars match
        if (s[start] === s[end]) {
            result = 2 + recurse(start + 1, end - 1)
            memo.set(key, result)
            return result
        }

        // case 2: skip one char, either from the beginning or the end
        const sum1 = recurse(start + 1, end)
        const sum2 = recurse(start, end - 1)

        result = Math.max(sum1, sum2)
        memo.set(key, result)
        return result
    }

    return recurse(0, s.length - 1)
};

console.log(longestPalindromeSubseq('aabb'))
