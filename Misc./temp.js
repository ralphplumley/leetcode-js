const addParen = function (list, leftRem, rightRem, str, index) {
    if (leftRem < 0 || rightRem < leftRem) return // invalid state

    if (leftRem === 0 && rightRem === 0) { // out of left and right parentheses
        const strCopy = str.slice(0)
        list.push(strCopy.join(''))
    } else {
        str[index] = '(' // add left and recurse
        addParen(list, leftRem - 1, rightRem, str, index + 1)

        str[index] = ')' // add right and recurse
        addParen(list, leftRem, rightRem - 1, str, index + 1)
    }
}

const generateParens = function (count) {
    let str = new Array(count*2)
    let list = []
    addParen(list, count, count, str, 0)
    return list
}

console.log(generateParens(3))
