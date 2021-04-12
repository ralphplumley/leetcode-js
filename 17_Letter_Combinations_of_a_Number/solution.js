/**
 * @param {string} digits
 * @return {string[]}
 */
let map = new Map([
    ['2', 'abc'],
    ['3', 'def'],
    ['4', 'ghi'],
    ['5', 'jkl'],
    ['6', 'mno'],
    ['7', 'pqrs'],
    ['8', 'tuv'],
    ['9', 'wxyz']
])

const letterCombinations = function(digits) {
    if (digits.length === 0) return []

    let len = digits.length,
        ans = []

    const dfs = (idx, str) => {
        if (idx === len) ans.push(str)
        else {
            let letters = map.get(digits[idx])
            for (let i = 0; i < letters.length; i++) {
                dfs(idx + 1, str + letters[i])
            }
        }
    }

    dfs(0, "")
    return ans
};

console.log(letterCombinations("23"))