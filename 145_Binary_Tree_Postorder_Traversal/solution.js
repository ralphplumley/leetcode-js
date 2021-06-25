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
var postorderTraversal = function(root) {
    const ans = []

    const recurse = function(node) {
        if (!node) return

        if (node.left) recurse(node.left)
        if (node.right) recurse(node.right)
        ans.push(node.val)
    }

    recurse(root)
    return ans
};
