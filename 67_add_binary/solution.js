/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
let addBinary = function(a, b) {
    let diff = Math.abs(a.length - b.length)
    if (a.length > b.length) {
        let b_arr = b.split('').reverse()
        let i = 0
        while (i < diff) {
            b_arr.push('0')
            i++
        }
        b_arr.reverse()
        b = b_arr.join('')
    } else {
        let a_arr = a.split('').reverse()
        let i = 0
        while (i < diff) {
            a_arr.push('0')
            i++
        }
        a_arr.reverse()
        a = a_arr.join('')
    }

    let ans = ''
    let carry = 0
    for (let i = a.length - 1; i >= 0; i--) {
        let char1 = a[i]
        let char2 = b[i]
        let n1 = parseInt(char1, 2)
        let n2 = parseInt(char2, 2)
        let sum = carry + n1 + n2
        carry =  Math.floor(sum/2)
        let digit = JSON.stringify(sum%2)
        ans = ans += digit
    }
    ans = ans.split('').reverse().join('')
    return carry > 0 ? JSON.stringify(carry) + ans : ans
};

module.exports = addBinary