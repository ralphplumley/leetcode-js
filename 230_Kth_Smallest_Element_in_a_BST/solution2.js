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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let arr = []

    const recurse = function(node) {
        if (node.left) recurse(node.left)
        arr.push(node.val)
        if (node.right) recurse(node.right)
    }

    recurse(root)
    return arr[k-1]
};
