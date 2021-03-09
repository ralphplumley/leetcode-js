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
 * @param {number} targetSum
 * @return {boolean}
 */
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

const hasPathSum = function(root, targetSum) {
    // base case - if it's a leaf / no children
        // if targetsum === root.value
            // return true
        // else
            // return false

    // if there's a left child
        // hasPathSum(root.left, targetsum - root.val)
    // if there's a right child
        // hasPathSum(root.right, targetsum - root.val)

    if (!root) return false
    if (!root.left && !root.right && root.val === targetSum) return true

    let newTarget = targetSum - root.val
    return (hasPathSum(root.left, newTarget) || hasPathSum(root.right, newTarget))
};