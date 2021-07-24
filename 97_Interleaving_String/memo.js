/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
    const memo = new Map()

    const recurse = (index1, index2, index3) => {
        // if we have reached the end of all strings
        if (index1 === s1.length && index2 === s2.length && index3 === s3.length) return true

        // if we have reached the end of s3, but s1 or s2 still has some chars left
        if (index3 === s3.length) return false

        const key = index1 + '#' + index2 + '#' + index3
        if (memo.has(key)) return memo.get(key)

        let b1 = false,
            b2 = false

        if (index1 < s1.length && s1[index1] === s3[index3])
            b1 = recurse(index1 + 1, index2, index3 + 1)

        if (index2 < s2.length && s2[index2] === s3[index3])
            b2 = recurse(index1, index2 + 1, index3 + 1)

        memo.set(key, b1 || b2)

        return memo.get(key)
    }

    return recurse(0, 0, 0)
};
