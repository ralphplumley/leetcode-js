/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
const licenseKeyFormatting = function(S, K) {
    let cleanedStr = S.replace(/-/g, '').toUpperCase()
    let tmp = ''
    let j = 0
    for (let i = cleanedStr.length - 1; i >= 0; i--) {
        let char = cleanedStr.charAt(i)
        tmp += char
        j++
        if (j === K && i !== 0) {
            tmp += '-'
            j = 0
        }
    }

    let solution = tmp.split(''). reverse().join('')
    return solution
};

console.log(licenseKeyFormatting('2-5g-3-J', 2))
// console.log(licenseKeyFormatting('5F3Z-2e-9-w', 4))
