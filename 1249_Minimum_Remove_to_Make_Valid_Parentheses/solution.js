/**
 * @param {string} s
 * @return {string}
 */
let minRemoveToMakeValid = function(s) {
   // instantiate indexes_to_remove (type of Set)
   // instantiate our stack (type of array)

   // iterate through each char in input string
        // if char is "("
            // push index into stack
        // if char is ")"
            // if the stack is empty
                // add index to our set
            // else
                // pop the stack

    // We need to put any indexes remaining on stack into the set
    // while the stack is not empty
        // indexes_to_remove.add(stack.pop())

    // Finally, prepare our output string
    // instantiate string_builder (type of array)
    // loop through each character in string
        // if indexes_to_remove does not contain index
            // push char in to our string_builder

    // return string_builder (use join(''), as we want a string output)

    let indexes_to_remove = new Set()
    let stack = []

    for (let i = 0; i < s.length; i++) {
        let char = s[i]
        if (char === "(") {
            stack.push(i)
        }
        if (char === ")") {
            if (stack.length === 0) {
                indexes_to_remove.add(i)
            } else {
                stack.pop()
            }
        }
    }
    while (stack.length > 0) {
        indexes_to_remove.add(stack.pop())
    }

    let string_builder = []
    for (let i = 0; i < s.length; i++) {
        if (!indexes_to_remove.has(i)) {
            string_builder.push(s[i])
        }
    }

    return string_builder.join('')
};

let test1 = "lee(t(c)o)de)"
let test2 = "a)b(c)d"
let test3 = "))(("
let test4 = "(a(b(c)d)"
let test5 = "())()((("

// console.log(minRemoveToMakeValid(test1))
// console.log(minRemoveToMakeValid(test2))
// console.log(minRemoveToMakeValid(test3))
// console.log(minRemoveToMakeValid(test4))
console.log(minRemoveToMakeValid(test5))

// "lee(t(c)o)de)"
// output: [lee(t(c)o)de]
// stack:  []

// "a)b(c)d"
// output: [ab(c)d]
// stack: []

// "))(("
// output: []
// stack: []

// "(a(b(c)d)"
// output: [(a(b(c)d)]
// stack: [(]

// "())()((("
// output: [()()(((]
// stack:  [(((]

// Time: O(s)
// Space: O(s)