/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(str1, str2) {

    const memo = new Map()

    const recurse = (index1, index2) => {
        if (index1 === str1.length) return str2.length - index2
        if (index2 === str2.length) return str1.length - index1

        const key = index1 + '#' + index2
        if (memo.has(key)) return memo.get(key)

        if (str1.charAt(index1) === str2.charAt(index2))
            return recurse(index1 + 1, index2 + 1)

        const sumOperation1 = 1 + recurse(index1 + 1, index2) // perform deletion
        const sumOperation2 = 1 + recurse(index1, index2 + 1) // perform insertion
        const sumOperation3 = 1 + recurse(index1 + 1, index2 + 1) // perform replacement

        const result = Math.min(sumOperation1, Math.min(sumOperation2, sumOperation3))
        memo.set(key, result)
        return result
    }

    return recurse(0, 0)
};
