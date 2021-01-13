/**
 * @param {string} s
 * @return {boolean}
 */
let isPalindrome = function(s) {
    let cleaned = s.replace(/[^0-9a-z]/gi, '').toLowerCase()
    let left = 0, right = cleaned.length - 1
    while (left < right) {
        if (cleaned[left] !== cleaned[right]) return false
        left += 1
        right -= 1
    }
    return true
};

module.exports = isPalindrome
