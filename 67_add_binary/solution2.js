/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
let addBinary = function(a, b) {
    a = a.split('').reverse().join('')
    b = b.split('').reverse().join('')
    let len = a.length > b.length ? a.length : b.length
    let result = []

    for (let i = 0; i < len; i++) {
        let num1 = Number(a[i] || 0)
        let num2 = Number(b[i] || 0)
        let curr = Number(result[i] || 0) + num1 + num2

        if (curr >= 2) {
            result[i] = curr % 2
            result.push(1)
        } else {
            result[i] = curr
        }
    }
    return result.reverse().join('')
};

module.exports = addBinary