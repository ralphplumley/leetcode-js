/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = []

    for (let i =0; i < s.length; i++) {
        let char = s.charAt(i)
        switch(char) {
            case '(': stack.push(')')
                break
            case '[': stack.push(']')
                break
            case '{': stack.push('}')
                break
            default:
                if (char !== stack.pop()) return false
        }
    }

    return stack.length === 0
};
