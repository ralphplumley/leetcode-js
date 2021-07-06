/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    const result = [],
        temp = []

    const backtrack = (n, index) => {
        if (temp.length === k && n === 0) result.push([...temp])

        for (let i = index; i < 10; ++i) {
            temp.push(i)
            backtrack(n - i, i + 1)
            temp.pop()
        }
    }

    backtrack(n, 1)
    return result
};
