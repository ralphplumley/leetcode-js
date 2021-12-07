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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (!root) return null

    const right = invertTree(root.right)
    const left = invertTree(root.left)
    root.left = right
    root.right = left

    return root
};
/*
    TC: O(n) for we traverse each node
    SC: O(height of tree) but in the worst case, a straight list tree, it would be n deep
        so O(n)
*/
