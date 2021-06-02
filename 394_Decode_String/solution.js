/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    const stack = []

    for (const char of s) {
        if (char !== ']') {
            stack.push(char)
            continue
        }

        let curr = stack.pop(),
            str = ''

        while (curr !== '[') {
            str = curr + str
            curr = stack.pop()
        }

        let num = ''
        curr = stack.pop()

        while (!Number.isNaN(Number(curr))) {
            num = curr + num
            curr = stack.pop()
        }

        if (curr) stack.push(curr)
        stack.push(str.repeat(Number(num)))
    }

    return stack.join('')
};

const input = "3[a]2[bc]"
console.log(decodeString(input))
