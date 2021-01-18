/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
let strStr = function(haystack, needle) {
    if (needle.length === 0) return 0
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[0]) {
            let index = i
            let j = 0
            while (j < needle.length) {
                if (haystack[i] !== needle[j]) break
                if (j === needle.length - 1) return index
                i++
                j++
            }
            i = index
        }
    }
    return -1
};
