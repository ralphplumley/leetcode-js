/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if (x === 0) return 0
    let negative = x < 0
    let strNum = JSON.stringify(x).split('')
    while (strNum[strNum.length - 1] === '0') {
        strNum.pop()
    }
    let reversed = strNum.reverse()
    if (negative) {
        reversed.pop()
    }
    reversed = reversed.join('')
    let reversedInt = parseInt(reversed, 10)
    if (-reversedInt < -2147483648 || reversedInt > 2147483647) return 0
    return negative ? -reversedInt : reversedInt
};

module.exports = reverse