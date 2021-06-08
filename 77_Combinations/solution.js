/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    return backtrack(k, n)
};

const backtrack = function (max, n, result = [], curr = [], index = 1) {
    if (curr.length === max) {
        result.push(curr)
        return []
    } else {
        while (index <= n) {
            backtrack(max, n, result, [...curr, index], ++index)
        }
        return result
    }
}

console.log(combine(4,2))
