/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

// let's try recursive
let reverseString = function(s) {
    recursive(s, 0, s.length - 1)
};

let recursive = function(str, left, right) {
    if (left >= right) return

    let tmp = str[left]
    str[left] = str[right]
    str[right] = tmp
    left++
    right--

    recursive(str, left, right)
}