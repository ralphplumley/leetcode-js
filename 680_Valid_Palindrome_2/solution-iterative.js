/**
 * @param {string} s
 * @return {boolean}
 */
let validPalindrome = function(s) {
    for (let i = 0; i < s.length / 2; i++) {
        if (s[i] !== s[s.length - 1 - i]) {
            let j = s.length - 1 - i
            return (isPalindromeRange(s, i + 1, j) || isPalindromeRange(s, i, j - 1))
        }
    }
    return true
};

let isPalindromeRange = function(s, i, j) {
    for (let k = i; k <= i + (j - 1) / 2; k++) {
        if (s[k] !== s[j - k + i]) return false
    }
    return true
}



console.log(validPalindrome("aab"))
console.log(validPalindrome("abc"))
console.log(validPalindrome("abcd"))
console.log(validPalindrome("racecarx"))
console.log(validPalindrome("xracecar"))
