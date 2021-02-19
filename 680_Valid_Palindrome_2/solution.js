/**
 * @param {string} s
 * @return {boolean}
 */
let validPalindrome = function(s) {
    let mulligan = false

    function recurse(s, left, right, mulligan) {
        if (left === right) return true
        if (left === right - 1) {
            if (s[left] === s[right]) {
                return true
            }
        }

        if (s[left] !== s[right]) {
            if (!mulligan) {
                mulligan = true
                return recurse(s, left, right - 1, mulligan) || recurse(s, left + 1, right, mulligan)
            } else {
               return false
            }
        }

        if (s[left] === s[right]) {
           return recurse(s, left + 1, right - 1, mulligan)
        }
    }

    return recurse(s, 0, s.length - 1, mulligan)

};


console.log(validPalindrome("aab"))
console.log(validPalindrome("abc"))
console.log(validPalindrome("abcd"))
console.log(validPalindrome("racecarx"))
console.log(validPalindrome("xracecar"))
