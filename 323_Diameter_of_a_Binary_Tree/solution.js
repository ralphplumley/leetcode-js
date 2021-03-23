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
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    let diameter = 0

    const longestPath = function(node) {
        if (node === null) return 0

        // recurseively find the longest path in both left and right child
        let leftPath = longestPath(node.left)
        let rightPath = longestPath(node.right)

        // update the diameter if left_path plus right_path is larger
        diameter = Math.max(diameter, leftPath + rightPath)

        // return the longest one between left and right path
        // remember to add 1 for the path connecting the node and it's parent
        return Math.max(leftPath, rightPath) + 1
    }

    longestPath(root)
    return diameter

};