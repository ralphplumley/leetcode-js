/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let res = 0, pow = 31
    while (n > 0) {
        let rightMost = n & 1
        res = res + (rightMost << pow)
        pow--
        n = n >>> 1
    }

    return res >>> 0
};
