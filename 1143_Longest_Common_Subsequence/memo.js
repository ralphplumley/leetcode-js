/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    const memo = []

    const recurse = (index1, index2) => {
        if (index1 === text1.length || index2 === text2.length) return 0

        memo[index1] = memo[index1] || []
        if (typeof memo[index1][index2] === 'undefined') {
            if (text1[index1] === text2[index2]) memo[index1][index2] = 1 + recurse(index1 + 1, index2 + 1)
            else {
                const c1 = recurse(index1, index2 + 1)
                const c2 = recurse(index1 + 1, index2)
                memo[index1][index2] = Math.max(c1, c2)
            }
        }
        return memo[index1][index2]
    }

    return recurse(0, 0)
};
