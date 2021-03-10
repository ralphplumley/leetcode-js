/**
 * @param {string} s
 * @return {number}
 */
const numDecodings = function(s) {
    let memo = new Map()

    const recursiveWithMemo = function (index, s) {
        // have we already seen this substring
        if (memo.has(index)) return memo.get(index)

        if (index === s.length) return 1
        if (s[index] === '0') return 0
        if (index === s.length - 1) return 1

        let ans = recursiveWithMemo(index + 1, s)
        if (parseInt(s.slice(index, index + 2)) <= 26) {
            ans += recursiveWithMemo(index + 2, s)
        }
        memo.set(index, ans)
        return ans
    }

    return recursiveWithMemo(0, s)
};

console.log(numDecodings('2125'))