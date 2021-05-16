/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(count) {
    let str = new Array(count * 2)
    let list = []
    addParen(list, count, count, str, 0)
    return list
};

const addParen = function (list, leftRem, rightRem, str, index) {
    if (leftRem < 0 || rightRem < leftRem) return

    if (leftRem === 0 && rightRem === 0) { // out of left and right parens
        list.push(str.slice(0).join(''))
    } else {
        str[index] = '('
        addParen(list, leftRem - 1, rightRem, str, index + 1)

        str[index] = ')'
        addParen(list, leftRem, rightRem - 1, str, index + 1)
    }

}
