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
var countUnivalSubtrees = function(root) {
    if (!root) return 0

    let count = 0

    const recurse = function(node) {
        if (!node.left && !node.right) {
            count++
            return true
        }

        let is_uniVal = true

        // check if all the node's children are univalue subtrees and if they have the same value
        // also recursively call for children
        if (node.left) {
            is_uniVal = recurse(node.left) && is_uniVal && (node.left.val === node.val)
        }

        if (node.right) {
            is_uniVal = recurse(node.right) && is_uniVal && (node.right.val === node.val)
        }

        // return if a univalue tree exists here and increment if it does
        if (!is_uniVal) return false
        count ++
        return true
    }

    recurse(root)
    return count
};
