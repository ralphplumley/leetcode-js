/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    let ans = []

    function recurse(node) {
        if (node === null) return
        ans.push(node.val)
        for (let child of node.children) {
            recurse(child)
        }
    }

    recurse(root)
    return ans
};