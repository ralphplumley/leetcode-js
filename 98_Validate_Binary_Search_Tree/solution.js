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
const isValidBST = function(root) {
    return validate(root, null, null)
};

const validate = function(root, low, high) {
    // empty trees are valid BSTs
    if (root === null) return true

    // current node's value must be between low and high
    if ((low !== null && root.val <= low) || (high !== null && root.val >= high)) {
        return false
    }

    // left and right subtree must also ve valid
    return validate(root.right, root.val, high) && validate(root.left, low, root.val)
}