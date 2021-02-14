/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function(str) {
    let permutations = []
    permutations.push(str)

    for (let i = 0; i < str.length; i++) {
        let char = str[i]
        if (Number.isInteger(parseInt(char))) continue
        let n = permutations.length
        for (let j = 0; j < n; j++) {
            let clone = permutations[j].slice(0)
            clone = swapCase(char, clone, i)
            permutations.push(clone)
        }
    }
    return permutations
};

const swapCase = function(char, str, index) {
    if (char === char.toUpperCase()) {
        char = char.toLowerCase()
    } else {
        char = char.toUpperCase()
    }

    let arr = str.split('')
    arr[index] = char
    return arr.join('')
}
