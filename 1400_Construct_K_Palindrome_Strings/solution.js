/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var canConstruct = function(s, k) {
    if (s.length < k) return false

    let count = new Map()
    s.split('').forEach(char => {
        if (count.has(char)) {
            count.set(char, count.get(char) + 1)
        } else {
            count.set(char, 1)
        }
    })

    let oddCount = 0
    for (let [key, value] of count) {
        if (value % 2 !== 0) oddCount++
    }

    if (oddCount > k) return false

    return true
};