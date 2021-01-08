/**
 * @param {string} s
 * @return {boolean}
 */
let isValid = function(str) {
    const dict = {
        ')' : '(',
        ']' : '[',
        '}' : '{'
    }

    const mySet = new Set()
    mySet.add('[')
    mySet.add('(')
    mySet.add('{')
    let myStack = []

    for (let i = 0; i < str.length; i++) {
        let char = str[i]
        if (mySet.has(char)) {
            myStack.push(char)
        } else {
            if (dict[char] === myStack[myStack.length - 1]) {
                myStack.pop()
            } else {
                return false
            }
        }
    }

    return myStack.length === 0
};

module.exports = isValid