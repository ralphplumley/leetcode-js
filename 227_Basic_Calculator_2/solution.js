/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    if (s === null || s.length < 0) return 0

    // remove space
    s = s.replace(/\s/g, '');

    let len = s.length,
        stack = [],
        currentNumber = 0,
        operation = '+'

    for (let i = 0; i < len; i++) {
        let char = s.charAt(i)

        if (!isNaN(char)) {
            currentNumber = (currentNumber * 10) + (char - '0') // e.g. '14' -> 1 * 10 + 4
        }

        if (isNaN(char) && char !== ' ' || i === len - 1) {
            if (operation === '-') {
                stack.push(-currentNumber)
            } else if (operation === '+') {
                stack.push(currentNumber)
            } else if (operation === '*') {
                stack.push(stack.pop() * currentNumber)
            } else if (operation === '/') {
                stack.push(Math.trunc(stack.pop() / currentNumber))
            }

            operation = char
            currentNumber = 0
        }
    }

    let result = 0
    while (stack.length > 0) {
        result += stack.pop()
    }

    return result

};
