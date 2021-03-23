/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function(s) {
    // clean the string
    let cleanedStr = ''
    for (let i = 0; i < s.length; i++) {
        let char = s.charAt(i)
        if (isAChar(char)) {
            cleanedStr += char
        }
    }
    cleanedStr = cleanedStr.toLowerCase()

    // use two pointers
    let left = 0,
        right = cleanedStr.length - 1

    while (left < right || (right - left) > 1) {
        if (cleanedStr.charAt(left) !== cleanedStr.charAt(right)) return false
        left++
        right--
    }

    return true
};

const isAChar = function(c) {
    return (/[0-9a-zA-Z]/).test(c)
}

console.log(isPalindrome("0P"))