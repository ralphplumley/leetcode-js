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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, target) {
    if (!root) return null
    if (root.val === target) return root

    if (target < root.val) {
        return searchBST(root.left, target)
    } else {
        return searchBST(root.right, target)
    }
};
