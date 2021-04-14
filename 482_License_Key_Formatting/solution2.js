var licenseKeyFormatting = function(s, k) {
    // clean the string
    // work backards / loop backwords
    // push char to output array
    // after every kth char, add -
    // return reverse.join of array

    let cleanedStr = s.replace(/-/g, '').toUpperCase()
    let output = []

    let count = 0
    for (let i = cleanedStr.length - 1; i >= 0; i--) {
        let char = cleanedStr.charAt(i)
        output.push(char)
        count++
        if (count === k && i !== 0) {
            output.push('-')
            count = 0
        }
    }

    return output.reverse().join('')
};

let s = "5F3Z-2e-9-w"
let k = 4
console.log(licenseKeyFormatting(s, k))
