/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let i = num1.length - 1
    let j = num2.length - 1
    let carry = 0
    let result = ''

    while (i > -1 || j > -1) {
        const digit1 = i > -1 ? num1[i] - '0' : 0
        const digit2 = j > -1 ? num2[j] - '0' : 0
        const sum = digit1 + digit2 + carry
        result += (sum % 10)
        carry = Math.floor(sum / 10)
        i -= 1
        j -= 1
    }

    if (carry > 0) {
        result += carry
    }

    return result.split("").reverse().join("")
};

module.exports = addStrings