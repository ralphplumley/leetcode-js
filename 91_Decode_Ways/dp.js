/**
 * @param {string} s
 * @return {number}
 */
const numDecodings = function(s) {
    // if it's a leading 0, it's an invalid input
    if (s[0] === '0') {
        return 0
    }

    const n = s.length
    let twoBack = 1
    let oneBack = 1

    for (let i = 1; i < n; i++) {
        let current = 0
        if (s[i] !== '0') {
            current += oneBack
        }

        const twoDigit = parseInt(s.slice(i-1, i+1))
        if (twoDigit >= 10 && twoDigit <= 26) {
           current += twoBack
        }
        twoBack = oneBack
        oneBack = current
    }
    return oneBack
};

console.log(numDecodings('2125'))