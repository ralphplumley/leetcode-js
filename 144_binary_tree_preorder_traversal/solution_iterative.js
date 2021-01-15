/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

let preorderTraversal = function(root) {
    let stack = []
    let result = []
    if (root === null ) return result

    stack.push(root)
    while (stack.length > 0) {
        let node = stack.pop()
        result.push(node.val)
        if (node.right) stack.push(node.right)
        if (node.left) stack.push(node.left)
    }

    return result
};

/*
i: node
o: array of values
c:
e:
 */

module.exports = preorderTraversal
