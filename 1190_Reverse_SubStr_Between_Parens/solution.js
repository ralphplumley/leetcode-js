/**
 * @param {string} s
 * @return {string}
 */
const reverseParentheses = function(s) {
    // Time: O(N^2) - iterate through each char, inside the loop we may have to do O(2N) operations
    // Space: O(N) - worst case, our stack is full of chars from s

    const stack = []

    for (let i = 0; i < s.length; ++i) {
        const char = s.charAt(i)
        if (char !== ')') {
            stack.push(char)
        } else {
            const tmp = []
            while (stack[stack.length - 1] !== '(') {
                tmp.push(stack.pop())
            }

            // pop '('
            stack.pop()

            if (i !== s.length - 1) {
                while (tmp.length > 0) {
                    stack.push(tmp.shift())
                }
            } else {
                const joined = tmp.join('')
                return stack.concat(joined).join('')
            }
        }
    }

    return stack.join('')
};
