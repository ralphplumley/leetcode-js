/**
 * @param {string} S
 * @return {string}
 */
let removeDuplicates = function(S) {
    // setup a stack (array), include the first char
    // iterate through each character in input S, starting with 1st index, not 0th - O(S)
        // if the current char is not the same as the last one in our stack || or the stack is empty
        // store in the stack
    // else
        // pop the stack

    // return the stack (join the array), since expected out put is type string

    let stack = [S[0]]
    for (let i = 1; i < S.length; i++) {
        let curr = S[i]
        if (curr !== stack[stack.length-1] || stack.length === 0) {
            stack.push(curr)
        } else {
            stack.pop()
        }
    }

    return stack.join('')
};

// Time: O(s)
// Space: O(s) as in the worst case there may be no duplicates, so we create an entire stack (array) with length S

console.log(removeDuplicates("abbaca"))
