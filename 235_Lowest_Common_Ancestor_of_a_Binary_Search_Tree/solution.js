/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if (p.val > root.val && q.val > root.val) {
        // if both p and q are greater than parent
        return lowestCommonAncestor(root.right, p, q)
    } else if (p.val < root.val && q.val < root.val) {
        // if both p and q are less than parent
        return lowestCommonAncestor(root.left, p, q)
    } else {
        // we've found the split joint, ie. the LCA ndoe
        return root
    }
};
