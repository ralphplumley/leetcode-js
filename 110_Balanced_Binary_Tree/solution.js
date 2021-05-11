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
 * @return {boolean}
 */
const isBalanced = function(root) {
    return checkHeight(root) !== -Infinity
};

const checkHeight = function(root) {
    if (root === null) return -1

    let leftHeight = checkHeight(root.left)
    if (leftHeight === -Infinity) return -Infinity // pass error up

    let rightHeight = checkHeight(root.right)
    if (rightHeight === -Infinity) return -Infinity // pass error up

    let heightDiff = leftHeight - rightHeight
    if (Math.abs(heightDiff) > 1) {
        return -Infinity
    } else {
        return Math.max(leftHeight, rightHeight) + 1
    }
}
